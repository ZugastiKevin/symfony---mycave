<?php

namespace App\Controller;

use App\Entity\Caves;
use App\Entity\Bottles;
use App\Entity\Highlight;
use App\Repository\CavesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class CellarController extends AbstractController
{
    #[Route('/cellars', name: 'cellars')]
    public function index(CavesRepository $repository): Response
    {
        $caves = $repository->findAll();

        return $this->render('cellar/index.html.twig', [
            'caves' => $caves,
        ]);
    }

    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/cellar/{id}', name: 'cellar')]
    public function read(Caves $caves): Response
    {
        $highlightfind = $caves->getHighlight();
        $highlight = $highlightfind ? $highlightfind->getBottle() : null;
        $bottles = $caves->getBottle();

        $user = $this->getUser();
        $cave = $user->getCave();
        $bottlesInCave = $cave->getBottle();

        return $this->render('cellar/cellarById.html.twig', [
            'highlight' => $highlight,
            'bottles' => $bottles,
            'caveBottleIds' => array_map(fn($b) => $b->getId(), $bottlesInCave->toArray()),
            'currentHighlightId' => $highlight ? $highlight->getId() : null,
        ]);
    }

   #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/toggle_highlight/{id}', name: 'toggle_highlight', methods: ['POST'])]
    public function toggleHighlight(Bottles $bottle, EntityManagerInterface $entityManager): JsonResponse
    {
        $user = $this->getUser();
        $cave = $user->getCave();

        $highlight = $cave->getHighlight();

        // Si déjà en highlight, on le supprime
        if ($highlight && $highlight->getBottle() === $bottle) {
            $cave->setHighlight(null); // Dissocie sans supprimer
            $entityManager->remove($highlight); // Ensuite supprime l'objet highlight
            $entityManager->flush();

            return new JsonResponse([
                'highlighted' => false
            ]);
        }

        // Supprimer l'ancien highlight s'il existe
        if ($highlight) {
            $entityManager->remove($highlight);
        }
        // Nouveau highlight
        $newHighlight = new Highlight();
        $newHighlight->setCave($cave);
        $newHighlight->setBottle($bottle);
        $entityManager->persist($newHighlight);

        $entityManager->flush();

        return new JsonResponse([
            'highlighted' => true,
            'newHighlightId' => $bottle->getId()
        ]);
    }
}

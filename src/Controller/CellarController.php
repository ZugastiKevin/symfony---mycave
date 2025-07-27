<?php

namespace App\Controller;

use App\Entity\Caves;
use App\Entity\Bottles;
use App\Repository\CavesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
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
        $highlight = $caves->getHighlight();
        $bottles = $caves->getBottle();

        return $this->render('cellar/cellarById.html.twig', [
            'highlight' => $highlight,
            'bottles' => $bottles,
        ]);
    }
}

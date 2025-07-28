<?php

namespace App\Controller;

use App\Entity\Bio;
use App\Entity\Bottles;
use App\Entity\Cepages;
use App\Entity\Origins;
use App\Entity\Regions;
use App\Entity\Sulfite;
use App\Entity\Producers;
use App\Entity\WineProfile;
use App\Form\BottlesTypeForm;
use App\Repository\BottlesRepository;
use App\Repository\ProducersRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class BottlesController extends AbstractController
{
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/bottles', name: 'bottles')]
    public function index(BottlesRepository $repository): Response
    {
        $bottles = $repository->findAll();

        return $this->render('bottles/index.html.twig', [
            'bottles' => $bottles,
        ]);
    }

    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/bottle/{id}', name: 'bottle')]
    public function bottleById(Bottles $bottles): Response
    {
        return $this->render('bottles/bottle.html.twig', [
            'bottle' => $bottles,
        ]);
    }

    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/update_bottle/{id}', name: 'update_bottle')]
    #[Route('/create_bottle', name: 'create_bottle')]
    public function addBottles(?Bottles $bottles, Request $request, EntityManagerInterface $entityManager, ProducersRepository $producerRepository): Response
    {
        $isNew = false;

        if (!$bottles) {
            $bottles = new Bottles;
            $isNew = true;
        } else {
            if ($bottles->getUser() !== $this->getUser()) {
                return $this->redirectToRoute('home');
            }
        }

        $form = $this->createForm(BottlesTypeForm::class, $bottles);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            // bloc origin
            $regionId = $request->request->all('form')['region'] ?? null;
            $region = $entityManager->getRepository(Regions::class)->find($regionId);

            $producerValue = $form->get('producer')->getData();

            $producer = $entityManager->getRepository(Producers::class)->findOneBy([
                'label' => $producerValue,
            ]);

            if (!$producer) {
                $producer = new Producers();
                $producer->setLabel($producerValue);
                $entityManager->persist($producer);
            }

            $origin = $entityManager->getRepository(Origins::class)->findOneBy([
                'region' => $region,
                'producer' => $producer,
            ]);

            if (!$origin) {
                $origin = new Origins();
                $origin->setRegion($region);
                $origin->setProducer($producer);
                $entityManager->persist($origin);
            }

            $bottles->setOrigin($origin);

            // Bloc wine profile
            $cepageId = $request->request->all('form')['cepage'] ?? null;
            $cepage = $entityManager->getRepository(Cepages::class)->find($cepageId);

            $bioValue = $form->get('bio')->getData();
            $sulfiteValue = $form->get('sulfite')->getData();

            $bio = $entityManager->getRepository(Bio::class)->findOneBy([
                'isBio' => $bioValue,
            ]);

            if (!$bio) {
                $bio = new Bio();
                $bio->setIsBio($bioValue);
                $entityManager->persist($bio);
            }

            $sulfite = $entityManager->getRepository(Sulfite::class)->findOneBy([
                'isSulfite' => $sulfiteValue,
            ]);

            if (!$sulfite) {
                $sulfite = new Sulfite();
                $sulfite->setIsSulfite($sulfiteValue);
                $entityManager->persist($sulfite);
            }

            $wineProfile = $entityManager->getRepository(WineProfile::class)->findOneBy([
                'cepage' => $cepage,
                'bio' => $bio,
                'sulfite' => $sulfite,
            ]);

            if (!$wineProfile) {
                $wineProfile = new WineProfile();
                $wineProfile->setCepages($cepage);
                $wineProfile->setBio($bio);
                $wineProfile->setSulfite($sulfite);
                $entityManager->persist($wineProfile);
            }

            $bottles->setWineProfile($wineProfile);

            // bloc years
            $selectedYear = $form->get('years')->getData();

            if ($selectedYear) {
                $date = \DateTimeImmutable::createFromFormat('Y-m-d', $selectedYear . '-01-01');
                $bottles->setYears($date);
            }

            // bloc set user / relation cave bottle / createdat
            if ($isNew) {
                $user = $this->getUser();
                $cave = $user->getCave();

                $bottles->setUser($user);
                $bottles->addCave($cave);
                $cave->addBottle($bottles);
                $bottles->setCreatedAt(new \DateTimeImmutable());
            } else {
                
            }
            
            $entityManager->persist($bottles);
            $entityManager->flush();

            $bottles->setImageFile(null);
                
            return $this->redirectToRoute('cellar', ['id' => $cave->getId()]);
        }

        return $this->render('bottles/createUpdateBottles.html.twig', [
            'botlleCreateForm' => $form->createView(),
            'botlleUpdateForm' => $bottles->getId() !== null,
        ]);
    }
    
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/delete_bottle/{id}', name: 'delete_bottle')]
    public function deleteBottle(Bottles $bottles, Request $request, EntityManagerInterface $entityManager)
    {
        if ($bottles->getUser() !== $this->getUser()) {
            return $this->redirectToRoute('home');
        }

        if($this->isCsrfTokenValid("SUP". $bottles->getId(),$request->get('_token'))){
            $entityManager->remove($bottles);
            $entityManager->flush();
            return $this->redirectToRoute('cellar', ['id' => $cave->getId()]);
        }
    }
}

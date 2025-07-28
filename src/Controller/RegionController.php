<?php

namespace App\Controller;

use App\Entity\Regions;
use App\Repository\RegionsRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class RegionController extends AbstractController
{
    #[Route('/get-regions', name: 'get_regions_by_country', methods: ['GET'])]
    public function getRegionsByCountry(Request $request, RegionsRepository $repository, FormFactoryInterface $formFactory): JsonResponse
    {
        $paysId = $request->get('paysId');

        $regions = $repository->findBy(['pays' => $paysId]);

        $form = $formFactory->createBuilder()
            ->add('region', ChoiceType::class, [
                'choices' => $regions,
                'choice_value' => 'id',
                'choice_label' => fn (Regions $region) => $region->getLabel(),
                'placeholder' => 'form.regions_placeholder',
                'label' => false,
                'csrf_protection' => false,
            ])
            ->getForm();

        return $this->json([
            'html' => $this->renderView('partials/regions.html.twig', [
                'form' => $form->createView(),
            ]),
        ]);
    }
}
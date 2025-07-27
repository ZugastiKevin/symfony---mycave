<?php

namespace App\Controller;

use App\Entity\Cepages;
use App\Repository\CepagesRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class CepageController extends AbstractController
{
    #[Route('/get-cepages', name: 'get_cepages_by_type', methods: ['GET'])]
    public function getCepagesByType(Request $request, CepagesRepository $repository, FormFactoryInterface $formFactory): JsonResponse
    {
        $typeId = $request->get('typeId');

        $cepages = $repository->findBy(['types' => $typeId]);

        $form = $formFactory->createNamed('cepage', ChoiceType::class, null, [
            'choices' => $cepages,
            'choice_label' => fn (Cepages $cepage) => $cepage->getLabel(),
            'placeholder' => 'form.grapes_placeholder',
            'label' => false,
            'csrf_protection' => false
        ]);

        return $this->json([
            'html' => $this->renderView('partials/cepages.html.twig', [
                'form' => $form->createView(),
            ]),
        ]);
    }
}
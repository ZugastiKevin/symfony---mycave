<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class LanguageController extends AbstractController
{
    #[Route('/ajax/get-translations/{_locale}', name: 'ajax_get_translations', methods: ['POST'])]
    public function ajaxGetTranslations(Request $request, string $_locale, TranslatorInterface $translator): JsonResponse
    {
        dd($request->getContent());
        $allowedLocales = ['fr', 'en'];
        if (!in_array($_locale, $allowedLocales)) {
            return new JsonResponse(['error' => 'Invalid locale'], 400);
        }

        $content = json_decode($request->getContent(), true);
        $keys = $content['keys'] ?? [];

        $translations = [];

        foreach ($keys as $key) {
            $translated = $translator->trans($key, [], null, $_locale);
            if ($translated !== $key) { // Évite de renvoyer une traduction manquante
                $translations[$key] = $translated;
            }
        }
        
        return new JsonResponse($translations);
    }

    #[Route('/ajax/change-locale/{_locale}', name: 'ajax_change_locale', methods: ['POST'])]
    public function ajaxChangeLocale(Request $request, string $_locale): JsonResponse
    {
        dd($request->getContent());
        $allowedLocales = ['fr', 'en'];
        if (!in_array($_locale, $allowedLocales)) {
            return new JsonResponse(['error' => 'Invalid locale'], 400);
        }
    
        $request->getSession()->set('_locale', $_locale);
        return new JsonResponse(['success' => true]);
    }
}

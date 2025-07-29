<?php

namespace App\Form;

use App\Entity\Pays;
use App\Entity\Types;
use App\Entity\Bottles;
use App\Entity\Cepages;
use App\Entity\Regions;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class BottlesTypeForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $isUpdate = $options['is_update'];

        $builder
            ->add('label', TextType::class,[
                'required' => true,
                'attr' => [
                    'minlength' => 1,
                    'maxlength' => 100,
                    'pattern' => '^.{0,100}$'
                ],
                'constraints' => [
                    new Assert\Length([
                        'min' => 1,
                        'max' => 100,
                        'minMessage' => 'form.label.min',
                        'maxMessage' => 'form.label.max',
                    ]),
                ],
            ])
            ->add('describ', TextareaType::class,[
                'required' => true,
                'attr' => [
                    'min' => 1,
                    'maxlength' => 1200,
                    'pattern' => '^.{0,1200}$'
                ],
                'constraints' => [
                    new Assert\Length([
                        'min' => 1,
                        'max' => 1200,
                        'minMessage' => 'form.describ.describ_too_short',
                        'maxMessage' => 'form.describ.describ_too_long',
                    ]),
                ],
            ])
            ->add('price', NumberType::class,[
                'required' => true,
                'scale' => 2,
                'attr' => [
                    'step' => '0.01',
                    'inputmode' => 'decimal',
                    'min' => 1,
                    'max' => 1000000,
                    'pattern' => '^[0-9]+([.,][0-9]{1,2})?$'
                ],
                'constraints' => [
                    new Assert\Range([
                        'min' => 1,
                        'max' => 1000000,
                        'notInRangeMessage' => 'form.price.range_error'
                    ]),
                ],
            ])
            ->add('years', ChoiceType::class, [
                'mapped' => false,
                'required' => true,
                'choices' => array_combine(
                    range(date('Y'), 1850),
                    range(date('Y'), 1850)
                ),
                'placeholder' => 'form.year_placeholder',
            ])
            ->add('volume', NumberType::class,[
                'required' => true,
                'scale' => 2,
                'attr' => [
                    'placeholder' => 'form.alcool',
                    'step' => '0.1',
                    'min' => 0,
                    'max' => 22,
                    'pattern' => '^(?:([0-9]|1[0-9]|2[0-1])(?:[.,][0-9]{1,2})?|22(?:[.,]0{1,2})?)$',
                ],
            ])
            ->add('imageFile', FileType::class,[
                'mapped' => true,
                'required' => $options['is_update'] === false,
                'constraints' => [
                    new File([
                        'maxSize' => '2M',
                        'mimeTypes' => [
                            'image/jpeg',
                            'image/jpg',
                            'image/png',
                            'image/webp',
                        ],
                        'mimeTypesMessage' => 'form.invalid_type'
                    ])
                ]
            ])
            ->add('pays', EntityType::class, [
                'class' => Pays::class,
                'mapped' => false,
                'required' => true,
                'placeholder' => 'form.pays_placeholder',
                'choice_label' => 'label',
                'attr' => ['class' => 'pays-selector'],
            ])
            ->add('region', EntityType::class, [
                'class' => Regions::class,
                'mapped' => false,
                'required' => true,
                'placeholder' => 'form.regions_placeholder',
                'choice_label' => 'label',
            ])
            ->add('producer', TextType::class, [
                'mapped' => false,
                'required' => true,
                'attr' => [
                    'minlength' => 1,
                    'maxlength' => 100,
                    'pattern' => '^.{0,100}$'
                ],
            ])
            ->add('type', EntityType::class, [
                'class' => Types::class,
                'mapped' => false,
                'required' => true,
                'choice_label' => 'label',
                'placeholder' => 'form.types_placeholder',
            ])
            ->add('cepage', EntityType::class, [
                'class' => Cepages::class,
                'mapped' => false,
                'required' => true,
                'choice_label' => 'label',
                'placeholder' => 'form.grapes_placeholder',
            ])
            ->add('bio', ChoiceType::class, [
                'label' => 'bottle.bio',
                'mapped' => false,
                'choices' => [
                    'form.yes' => true,
                    'form.no' => false,
                ],
                'expanded' => true,
                'multiple' => false,
                'required' => true,
            ])
            ->add('sulfite', ChoiceType::class, [
                'label' => 'bottle.sulfite',
                'mapped' => false,
                'choices' => [
                    'form.yes' => true,
                    'form.no' => false,
                ],
                'expanded' => true,
                'multiple' => false,
                'required' => true,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Bottles::class,
            'is_update' => false,
        ]);
    }
}

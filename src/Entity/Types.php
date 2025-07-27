<?php

namespace App\Entity;

use App\Repository\TypesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TypesRepository::class)]
class Types
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $label = null;

    /**
     * @var Collection<int, Cepages>
     */
    #[ORM\OneToMany(targetEntity: Cepages::class, mappedBy: 'types')]
    private Collection $cepage;

    public function __construct()
    {
        $this->cepage = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    /**
     * @return Collection<int, Cepages>
     */
    public function getCepage(): Collection
    {
        return $this->cepage;
    }

    public function addCepage(Cepages $cepage): static
    {
        if (!$this->cepage->contains($cepage)) {
            $this->cepage->add($cepage);
            $cepage->setTypes($this);
        }

        return $this;
    }

    public function removeCepage(Cepages $cepage): static
    {
        if ($this->cepage->removeElement($cepage)) {
            // set the owning side to null (unless already changed)
            if ($cepage->getTypes() === $this) {
                $cepage->setTypes(null);
            }
        }

        return $this;
    }
}

<?php

namespace App\Entity;

use App\Repository\WineProfileRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: WineProfileRepository::class)]
class WineProfile
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'wineProfiles')]
    private ?Bio $bio = null;

    #[ORM\ManyToOne(inversedBy: 'wineProfiles')]
    private ?Sulfite $sulfite = null;

    /**
     * @var Collection<int, Bottles>
     */
    #[ORM\OneToMany(targetEntity: Bottles::class, mappedBy: 'wineProfiles')]
    private Collection $bottles;

    #[ORM\ManyToOne(inversedBy: 'wineProfile')]
    private ?Cepages $cepage = null;

    public function __construct()
    {
        $this->bottles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBio(): ?Bio
    {
        return $this->bio;
    }

    public function setBio(?Bio $bio): static
    {
        $this->bio = $bio;

        return $this;
    }

    public function getSulfite(): ?Sulfite
    {
        return $this->sulfite;
    }

    public function setSulfite(?Sulfite $sulfite): static
    {
        $this->sulfite = $sulfite;

        return $this;
    }

    /**
     * @return Collection<int, Bottles>
     */
    public function getBottles(): Collection
    {
        return $this->bottles;
    }

    public function addBottle(Bottles $bottle): static
    {
        if (!$this->bottles->contains($bottle)) {
            $this->bottles->add($bottle);
            $bottle->setWineProfile($this);
        }

        return $this;
    }

    public function removeBottle(Bottles $bottle): static
    {
        if ($this->bottles->removeElement($bottle)) {
            // set the owning side to null (unless already changed)
            if ($bottle->getWineProfile() === $this) {
                $bottle->setWineProfile(null);
            }
        }

        return $this;
    }

    public function getCepages(): ?Cepages
    {
        return $this->cepage;
    }

    public function setCepages(?Cepages $cepage): static
    {
        $this->cepage = $cepage;

        return $this;
    }
}

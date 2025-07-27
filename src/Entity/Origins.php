<?php

namespace App\Entity;

use App\Repository\OriginsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OriginsRepository::class)]
class Origins
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'origins')]
    private ?Regions $region = null;

    #[ORM\ManyToOne(targetEntity: Producers::class, inversedBy: 'origins')]
    private ?Producers $producer = null;

    /**
     * @var Collection<int, Bottles>
     */
    #[ORM\OneToMany(targetEntity: Bottles::class, mappedBy: 'origin')]
    private Collection $bottles;

    public function __construct()
    {
        $this->bottles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRegion(): ?Regions
    {
        return $this->region;
    }

    public function setRegion(?Regions $region): static
    {
        $this->region = $region;

        return $this;
    }

    public function getProducer(): ?Producers
    {
        return $this->producer;
    }

    public function setProducer(?Producers $producer): static
    {
        $this->producer = $producer;

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
            $bottle->setOrigin($this);
        }

        return $this;
    }

    public function removeBottle(Bottles $bottle): static
    {
        if ($this->bottles->removeElement($bottle)) {
            // set the owning side to null (unless already changed)
            if ($bottle->getOrigin() === $this) {
                $bottle->setOrigin(null);
            }
        }

        return $this;
    }
}

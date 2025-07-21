<?php

namespace App\Entity;

use App\Repository\ProducersRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProducersRepository::class)]
class Producers
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $label = null;

    /**
     * @var Collection<int, Origins>
     */
    #[ORM\OneToMany(targetEntity: Origins::class, mappedBy: 'producer')]
    private Collection $origins;

    public function __construct()
    {
        $this->origins = new ArrayCollection();
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
     * @return Collection<int, Origins>
     */
    public function getOrigins(): Collection
    {
        return $this->origins;
    }

    public function addOrigin(Origins $origin): static
    {
        if (!$this->origins->contains($origin)) {
            $this->origins->add($origin);
            $origin->setProducer($this);
        }

        return $this;
    }

    public function removeOrigin(Origins $origin): static
    {
        if ($this->origins->removeElement($origin)) {
            // set the owning side to null (unless already changed)
            if ($origin->getProducer() === $this) {
                $origin->setProducer(null);
            }
        }

        return $this;
    }
}

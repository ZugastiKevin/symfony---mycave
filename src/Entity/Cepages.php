<?php

namespace App\Entity;

use App\Repository\CepagesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CepagesRepository::class)]
class Cepages
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $label = null;

    #[ORM\ManyToOne(inversedBy: 'cepages')]
    private ?Types $type = null;

    /**
     * @var Collection<int, WineProfile>
     */
    #[ORM\OneToMany(targetEntity: WineProfile::class, mappedBy: 'cepages')]
    private Collection $wineProfiles;

    public function __construct()
    {
        $this->wineProfiles = new ArrayCollection();
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

    public function getTypes(): ?Types
    {
        return $this->type;
    }

    public function setTypes(?Types $type): static
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection<int, WineProfile>
     */
    public function getWineProfile(): Collection
    {
        return $this->wineProfiles;
    }

    public function addWineProfile(WineProfile $wineProfile): static
    {
        if (!$this->wineProfiles->contains($wineProfile)) {
            $this->wineProfiles->add($wineProfile);
            $wineProfile->setCepages($this);
        }

        return $this;
    }

    public function removeWineProfile(WineProfile $wineProfile): static
    {
        if ($this->wineProfiles->removeElement($wineProfile)) {
            // set the owning side to null (unless already changed)
            if ($wineProfile->getCepages() === $this) {
                $wineProfile->setCepages(null);
            }
        }

        return $this;
    }
}

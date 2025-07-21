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
     * @var Collection<int, WineProfile>
     */
    #[ORM\OneToMany(targetEntity: WineProfile::class, mappedBy: 'type')]
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

    /**
     * @return Collection<int, WineProfile>
     */
    public function getWineProfiles(): Collection
    {
        return $this->wineProfiles;
    }

    public function addWineProfile(WineProfile $wineProfile): static
    {
        if (!$this->wineProfiles->contains($wineProfile)) {
            $this->wineProfiles->add($wineProfile);
            $wineProfile->setType($this);
        }

        return $this;
    }

    public function removeWineProfile(WineProfile $wineProfile): static
    {
        if ($this->wineProfiles->removeElement($wineProfile)) {
            // set the owning side to null (unless already changed)
            if ($wineProfile->getType() === $this) {
                $wineProfile->setType(null);
            }
        }

        return $this;
    }
}

<?php

namespace App\Entity;

use App\Repository\SulfiteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SulfiteRepository::class)]
class Sulfite
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'boolean')]
    private ?bool $isSulfite = null;

    /**
     * @var Collection<int, WineProfile>
     */
    #[ORM\OneToMany(targetEntity: WineProfile::class, mappedBy: 'sulfite')]
    private Collection $wineProfiles;

    public function __construct()
    {
        $this->wineProfiles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isSulfite(): ?bool
    {
        return $this->isSulfite;
    }

    public function setIsSulfite(bool $isSulfite): static
    {
        $this->isSulfite = $isSulfite;

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
            $wineProfile->setSulfite($this);
        }

        return $this;
    }

    public function removeWineProfile(WineProfile $wineProfile): static
    {
        if ($this->wineProfiles->removeElement($wineProfile)) {
            // set the owning side to null (unless already changed)
            if ($wineProfile->getSulfite() === $this) {
                $wineProfile->setSulfite(null);
            }
        }

        return $this;
    }
}

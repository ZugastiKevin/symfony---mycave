<?php

namespace App\Entity;

use App\Repository\BioRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BioRepository::class)]
class Bio
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?bool $bio = null;

    /**
     * @var Collection<int, WineProfile>
     */
    #[ORM\OneToMany(targetEntity: WineProfile::class, mappedBy: 'bio')]
    private Collection $wineProfiles;

    public function __construct()
    {
        $this->wineProfiles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isBio(): ?bool
    {
        return $this->bio;
    }

    public function setBio(bool $bio): static
    {
        $this->bio = $bio;

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
            $wineProfile->setBio($this);
        }

        return $this;
    }

    public function removeWineProfile(WineProfile $wineProfile): static
    {
        if ($this->wineProfiles->removeElement($wineProfile)) {
            // set the owning side to null (unless already changed)
            if ($wineProfile->getBio() === $this) {
                $wineProfile->setBio(null);
            }
        }

        return $this;
    }
}

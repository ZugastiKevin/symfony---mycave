<?php

namespace App\Entity;

use App\Repository\CavesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CavesRepository::class)]
class Caves
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?User $user = null;

    /**
     * @var Collection<int, Bottles>
     */
    #[ORM\ManyToMany(targetEntity: Bottles::class, inversedBy: 'caves')]
    private Collection $bottle;

    #[ORM\OneToOne(mappedBy: 'cave', cascade: ['persist', 'remove'])]
    private ?Highlight $highlight = null;

    public function __construct()
    {
        $this->bottle = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection<int, Bottles>
     */
    public function getBottle(): Collection
    {
        return $this->bottle;
    }

    public function addBottle(Bottles $bottle): static
    {
        if (!$this->bottle->contains($bottle)) {
            $this->bottle->add($bottle);
        }

        return $this;
    }

    public function removeBottle(Bottles $bottle): static
    {
        $this->bottle->removeElement($bottle);

        return $this;
    }

    public function getHighlight(): ?Highlight
    {
        return $this->highlight;
    }

    public function setHighlight(?Highlight $highlight): static
    {
        // unset the owning side of the relation if necessary
        if ($highlight === null && $this->highlight !== null) {
            $this->highlight->setCave(null);
        }

        // set the owning side of the relation if necessary
        if ($highlight !== null && $highlight->getCave() !== $this) {
            $highlight->setCave($this);
        }

        $this->highlight = $highlight;

        return $this;
    }
}

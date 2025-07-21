<?php

namespace App\Entity;

use App\Repository\HighlightRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: HighlightRepository::class)]
class Highlight
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(inversedBy: 'highlight', cascade: ['persist', 'remove'])]
    private ?Caves $cave = null;

    #[ORM\ManyToOne(inversedBy: 'highlights')]
    private ?Bottles $bottle = null;

    /**
     * @var Collection<int, CommentsHighlight>
     */
    #[ORM\OneToMany(targetEntity: CommentsHighlight::class, mappedBy: 'highlight')]
    private Collection $commentsHighlights;

    public function __construct()
    {
        $this->commentsHighlights = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCave(): ?Caves
    {
        return $this->cave;
    }

    public function setCave(?Caves $cave): static
    {
        $this->cave = $cave;

        return $this;
    }

    public function getBottle(): ?Bottles
    {
        return $this->bottle;
    }

    public function setBottle(?Bottles $bottle): static
    {
        $this->bottle = $bottle;

        return $this;
    }

    /**
     * @return Collection<int, CommentsHighlight>
     */
    public function getCommentsHighlights(): Collection
    {
        return $this->commentsHighlights;
    }

    public function addCommentsHighlight(CommentsHighlight $commentsHighlight): static
    {
        if (!$this->commentsHighlights->contains($commentsHighlight)) {
            $this->commentsHighlights->add($commentsHighlight);
            $commentsHighlight->setHighlight($this);
        }

        return $this;
    }

    public function removeCommentsHighlight(CommentsHighlight $commentsHighlight): static
    {
        if ($this->commentsHighlights->removeElement($commentsHighlight)) {
            // set the owning side to null (unless already changed)
            if ($commentsHighlight->getHighlight() === $this) {
                $commentsHighlight->setHighlight(null);
            }
        }

        return $this;
    }
}

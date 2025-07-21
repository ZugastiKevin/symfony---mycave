<?php

namespace App\Entity;

use App\Repository\BottlesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BottlesRepository::class)]
class Bottles
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'bottles')]
    private ?User $user = null;

    #[ORM\ManyToOne(inversedBy: 'bottles')]
    private ?Origins $origin = null;

    #[ORM\ManyToOne(inversedBy: 'bottles')]
    private ?WineProfile $wineProfile = null;

    #[ORM\Column(length: 255)]
    private ?string $label = null;

    #[ORM\Column]
    private ?int $price = null;

    #[ORM\Column(type: Types::DATE_IMMUTABLE)]
    private ?\DateTimeImmutable $years = null;

    #[ORM\Column]
    private ?int $volume = null;

    #[ORM\Column(length: 255)]
    private ?string $imgBottle = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    /**
     * @var Collection<int, Caves>
     */
    #[ORM\ManyToMany(targetEntity: Caves::class, mappedBy: 'bottle')]
    private Collection $caves;

    /**
     * @var Collection<int, Highlight>
     */
    #[ORM\OneToMany(targetEntity: Highlight::class, mappedBy: 'bottle')]
    private Collection $highlights;

    /**
     * @var Collection<int, CommentsBottles>
     */
    #[ORM\OneToMany(targetEntity: CommentsBottles::class, mappedBy: 'bottle')]
    private Collection $commentsBottles;

    /**
     * @var Collection<int, Rates>
     */
    #[ORM\OneToMany(targetEntity: Rates::class, mappedBy: 'bottle')]
    private Collection $rates;

    public function __construct()
    {
        $this->caves = new ArrayCollection();
        $this->highlights = new ArrayCollection();
        $this->commentsBottles = new ArrayCollection();
        $this->rates = new ArrayCollection();
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

    public function getOrigin(): ?Origins
    {
        return $this->origin;
    }

    public function setOrigin(?Origins $origin): static
    {
        $this->origin = $origin;

        return $this;
    }

    public function getWineProfile(): ?WineProfile
    {
        return $this->wineProfile;
    }

    public function setWineProfile(?WineProfile $wineProfile): static
    {
        $this->wineProfile = $wineProfile;

        return $this;
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

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getYears(): ?\DateTimeImmutable
    {
        return $this->years;
    }

    public function setYears(\DateTimeImmutable $years): static
    {
        $this->years = $years;

        return $this;
    }

    public function getVolume(): ?int
    {
        return $this->volume;
    }

    public function setVolume(int $volume): static
    {
        $this->volume = $volume;

        return $this;
    }

    public function getImgBottle(): ?string
    {
        return $this->imgBottle;
    }

    public function setImgBottle(string $imgBottle): static
    {
        $this->imgBottle = $imgBottle;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return Collection<int, Caves>
     */
    public function getCaves(): Collection
    {
        return $this->caves;
    }

    public function addCave(Caves $cave): static
    {
        if (!$this->caves->contains($cave)) {
            $this->caves->add($cave);
            $cave->addBottle($this);
        }

        return $this;
    }

    public function removeCave(Caves $cave): static
    {
        if ($this->caves->removeElement($cave)) {
            $cave->removeBottle($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Highlight>
     */
    public function getHighlights(): Collection
    {
        return $this->highlights;
    }

    public function addHighlight(Highlight $highlight): static
    {
        if (!$this->highlights->contains($highlight)) {
            $this->highlights->add($highlight);
            $highlight->setBottle($this);
        }

        return $this;
    }

    public function removeHighlight(Highlight $highlight): static
    {
        if ($this->highlights->removeElement($highlight)) {
            // set the owning side to null (unless already changed)
            if ($highlight->getBottle() === $this) {
                $highlight->setBottle(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, CommentsBottles>
     */
    public function getCommentsBottles(): Collection
    {
        return $this->commentsBottles;
    }

    public function addCommentsBottle(CommentsBottles $commentsBottle): static
    {
        if (!$this->commentsBottles->contains($commentsBottle)) {
            $this->commentsBottles->add($commentsBottle);
            $commentsBottle->setBottle($this);
        }

        return $this;
    }

    public function removeCommentsBottle(CommentsBottles $commentsBottle): static
    {
        if ($this->commentsBottles->removeElement($commentsBottle)) {
            // set the owning side to null (unless already changed)
            if ($commentsBottle->getBottle() === $this) {
                $commentsBottle->setBottle(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Rates>
     */
    public function getRates(): Collection
    {
        return $this->rates;
    }

    public function addRate(Rates $rate): static
    {
        if (!$this->rates->contains($rate)) {
            $this->rates->add($rate);
            $rate->setBottle($this);
        }

        return $this;
    }

    public function removeRate(Rates $rate): static
    {
        if ($this->rates->removeElement($rate)) {
            // set the owning side to null (unless already changed)
            if ($rate->getBottle() === $this) {
                $rate->setBottle(null);
            }
        }

        return $this;
    }
}

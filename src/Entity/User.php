<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private ?string $email = null;

    /**
     * @var list<string> The user roles
     */
    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    private ?string $userName = null;

    #[ORM\Column(type: Types::DATE_IMMUTABLE)]
    private ?\DateTimeImmutable $createdAt = null;

    /**
     * @var Collection<int, Bottles>
     */
    #[ORM\OneToMany(targetEntity: Bottles::class, mappedBy: 'user')]
    private Collection $bottles;

    /**
     * @var Collection<int, CommentsHighlight>
     */
    #[ORM\OneToMany(targetEntity: CommentsHighlight::class, mappedBy: 'user')]
    private Collection $commentsHighlights;

    /**
     * @var Collection<int, CommentsBottles>
     */
    #[ORM\OneToMany(targetEntity: CommentsBottles::class, mappedBy: 'user')]
    private Collection $commentsBottles;

    /**
     * @var Collection<int, Rates>
     */
    #[ORM\OneToMany(targetEntity: Rates::class, mappedBy: 'user')]
    private Collection $rates;

    public function __construct()
    {
        $this->bottles = new ArrayCollection();
        $this->commentsHighlights = new ArrayCollection();
        $this->commentsBottles = new ArrayCollection();
        $this->rates = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    /**
     * @param list<string> $roles
     */
    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    #[\Deprecated]
    public function eraseCredentials(): void
    {
        // @deprecated, to be removed when upgrading to Symfony 8
    }

    public function getUserName(): ?string
    {
        return $this->userName;
    }

    public function setUserName(string $userName): static
    {
        $this->userName = $userName;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;
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
            $bottle->setUser($this);
        }

        return $this;
    }

    public function removeBottle(Bottles $bottle): static
    {
        if ($this->bottles->removeElement($bottle)) {
            // set the owning side to null (unless already changed)
            if ($bottle->getUser() === $this) {
                $bottle->setUser(null);
            }
        }

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
            $commentsHighlight->setUser($this);
        }

        return $this;
    }

    public function removeCommentsHighlight(CommentsHighlight $commentsHighlight): static
    {
        if ($this->commentsHighlights->removeElement($commentsHighlight)) {
            // set the owning side to null (unless already changed)
            if ($commentsHighlight->getUser() === $this) {
                $commentsHighlight->setUser(null);
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
            $commentsBottle->setUser($this);
        }

        return $this;
    }

    public function removeCommentsBottle(CommentsBottles $commentsBottle): static
    {
        if ($this->commentsBottles->removeElement($commentsBottle)) {
            // set the owning side to null (unless already changed)
            if ($commentsBottle->getUser() === $this) {
                $commentsBottle->setUser(null);
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
            $rate->setUser($this);
        }

        return $this;
    }

    public function removeRate(Rates $rate): static
    {
        if ($this->rates->removeElement($rate)) {
            // set the owning side to null (unless already changed)
            if ($rate->getUser() === $this) {
                $rate->setUser(null);
            }
        }

        return $this;
    }
}

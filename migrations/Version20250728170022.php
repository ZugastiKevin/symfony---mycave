<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250728170022 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cepages DROP FOREIGN KEY FK_995D05878EB23357');
        $this->addSql('DROP INDEX IDX_995D05878EB23357 ON cepages');
        $this->addSql('ALTER TABLE cepages CHANGE types_id type_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE cepages ADD CONSTRAINT FK_995D0587C54C8C93 FOREIGN KEY (type_id) REFERENCES types (id)');
        $this->addSql('CREATE INDEX IDX_995D0587C54C8C93 ON cepages (type_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cepages DROP FOREIGN KEY FK_995D0587C54C8C93');
        $this->addSql('DROP INDEX IDX_995D0587C54C8C93 ON cepages');
        $this->addSql('ALTER TABLE cepages CHANGE type_id types_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE cepages ADD CONSTRAINT FK_995D05878EB23357 FOREIGN KEY (types_id) REFERENCES types (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_995D05878EB23357 ON cepages (types_id)');
    }
}

<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250728074320 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE bio CHANGE bio is_bio TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE bottles ADD image_name VARCHAR(255) DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', ADD describ LONGTEXT NOT NULL, DROP img_bottle, CHANGE price price DOUBLE PRECISION NOT NULL, CHANGE volume volume DOUBLE PRECISION NOT NULL');
        $this->addSql('ALTER TABLE caves CHANGE user_id user_id INT NOT NULL');
        $this->addSql('ALTER TABLE cepages ADD type_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE cepages ADD CONSTRAINT FK_995D0587C54C8C93 FOREIGN KEY (type_id) REFERENCES types (id)');
        $this->addSql('CREATE INDEX IDX_995D0587C54C8C93 ON cepages (type_id)');
        $this->addSql('ALTER TABLE origins DROP FOREIGN KEY FK_E1DF033E8AC6BB8A');
        $this->addSql('DROP INDEX IDX_E1DF033E8AC6BB8A ON origins');
        $this->addSql('ALTER TABLE origins DROP cepage_id');
        $this->addSql('ALTER TABLE sulfite CHANGE sulfite is_sulfite TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE wine_profile DROP FOREIGN KEY FK_4979629AC54C8C93');
        $this->addSql('DROP INDEX IDX_4979629AC54C8C93 ON wine_profile');
        $this->addSql('ALTER TABLE wine_profile CHANGE type_id cepage_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE wine_profile ADD CONSTRAINT FK_4979629A8AC6BB8A FOREIGN KEY (cepage_id) REFERENCES cepages (id)');
        $this->addSql('CREATE INDEX IDX_4979629A8AC6BB8A ON wine_profile (cepage_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE bio CHANGE is_bio bio TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE origins ADD cepage_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE origins ADD CONSTRAINT FK_E1DF033E8AC6BB8A FOREIGN KEY (cepage_id) REFERENCES cepages (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_E1DF033E8AC6BB8A ON origins (cepage_id)');
        $this->addSql('ALTER TABLE cepages DROP FOREIGN KEY FK_995D0587C54C8C93');
        $this->addSql('DROP INDEX IDX_995D0587C54C8C93 ON cepages');
        $this->addSql('ALTER TABLE cepages DROP type_id');
        $this->addSql('ALTER TABLE caves CHANGE user_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE sulfite CHANGE is_sulfite sulfite TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE bottles ADD img_bottle VARCHAR(255) NOT NULL, DROP image_name, DROP updated_at, DROP describ, CHANGE price price INT NOT NULL, CHANGE volume volume INT NOT NULL');
        $this->addSql('ALTER TABLE wine_profile DROP FOREIGN KEY FK_4979629A8AC6BB8A');
        $this->addSql('DROP INDEX IDX_4979629A8AC6BB8A ON wine_profile');
        $this->addSql('ALTER TABLE wine_profile CHANGE cepage_id type_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE wine_profile ADD CONSTRAINT FK_4979629AC54C8C93 FOREIGN KEY (type_id) REFERENCES types (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_4979629AC54C8C93 ON wine_profile (type_id)');
    }
}

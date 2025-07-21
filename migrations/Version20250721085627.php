<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250721085627 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE bio (id INT AUTO_INCREMENT NOT NULL, bio TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bottles (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, origin_id INT DEFAULT NULL, wine_profile_id INT DEFAULT NULL, label VARCHAR(255) NOT NULL, price INT NOT NULL, years DATE NOT NULL COMMENT \'(DC2Type:date_immutable)\', volume INT NOT NULL, img_bottle VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_A3C3D9A76ED395 (user_id), INDEX IDX_A3C3D956A273CC (origin_id), INDEX IDX_A3C3D9E8D738E2 (wine_profile_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE caves (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, UNIQUE INDEX UNIQ_1AD0C160A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE caves_bottles (caves_id INT NOT NULL, bottles_id INT NOT NULL, INDEX IDX_F604852C7AA43AD1 (caves_id), INDEX IDX_F604852C4B11BD50 (bottles_id), PRIMARY KEY(caves_id, bottles_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE cepages (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE comments_bottles (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, bottle_id INT DEFAULT NULL, content VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_D6A3015A76ED395 (user_id), INDEX IDX_D6A3015DCF9352B (bottle_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE comments_highlight (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, highlight_id INT DEFAULT NULL, content VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_8A63EE19A76ED395 (user_id), INDEX IDX_8A63EE19F216DCD4 (highlight_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE highlight (id INT AUTO_INCREMENT NOT NULL, cave_id INT DEFAULT NULL, bottle_id INT DEFAULT NULL, UNIQUE INDEX UNIQ_C998D8347F05B85 (cave_id), INDEX IDX_C998D834DCF9352B (bottle_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE origins (id INT AUTO_INCREMENT NOT NULL, region_id INT DEFAULT NULL, cepage_id INT DEFAULT NULL, producer_id INT DEFAULT NULL, INDEX IDX_E1DF033E98260155 (region_id), INDEX IDX_E1DF033E8AC6BB8A (cepage_id), INDEX IDX_E1DF033E89B658FE (producer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pays (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE producers (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE rates (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, bottle_id INT DEFAULT NULL, score INT NOT NULL, INDEX IDX_44D4AB3CA76ED395 (user_id), INDEX IDX_44D4AB3CDCF9352B (bottle_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE regions (id INT AUTO_INCREMENT NOT NULL, pays_id INT DEFAULT NULL, label VARCHAR(255) NOT NULL, INDEX IDX_A26779F3A6E44244 (pays_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sulfite (id INT AUTO_INCREMENT NOT NULL, sulfite TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE types (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, user_name VARCHAR(255) NOT NULL, created_at DATE NOT NULL COMMENT \'(DC2Type:date_immutable)\', UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE wine_profile (id INT AUTO_INCREMENT NOT NULL, type_id INT DEFAULT NULL, bio_id INT DEFAULT NULL, sulfite_id INT DEFAULT NULL, INDEX IDX_4979629AC54C8C93 (type_id), INDEX IDX_4979629A9A99E1B9 (bio_id), INDEX IDX_4979629A9DB31FD2 (sulfite_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE bottles ADD CONSTRAINT FK_A3C3D9A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE bottles ADD CONSTRAINT FK_A3C3D956A273CC FOREIGN KEY (origin_id) REFERENCES origins (id)');
        $this->addSql('ALTER TABLE bottles ADD CONSTRAINT FK_A3C3D9E8D738E2 FOREIGN KEY (wine_profile_id) REFERENCES wine_profile (id)');
        $this->addSql('ALTER TABLE caves ADD CONSTRAINT FK_1AD0C160A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE caves_bottles ADD CONSTRAINT FK_F604852C7AA43AD1 FOREIGN KEY (caves_id) REFERENCES caves (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE caves_bottles ADD CONSTRAINT FK_F604852C4B11BD50 FOREIGN KEY (bottles_id) REFERENCES bottles (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE comments_bottles ADD CONSTRAINT FK_D6A3015A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE comments_bottles ADD CONSTRAINT FK_D6A3015DCF9352B FOREIGN KEY (bottle_id) REFERENCES bottles (id)');
        $this->addSql('ALTER TABLE comments_highlight ADD CONSTRAINT FK_8A63EE19A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE comments_highlight ADD CONSTRAINT FK_8A63EE19F216DCD4 FOREIGN KEY (highlight_id) REFERENCES highlight (id)');
        $this->addSql('ALTER TABLE highlight ADD CONSTRAINT FK_C998D8347F05B85 FOREIGN KEY (cave_id) REFERENCES caves (id)');
        $this->addSql('ALTER TABLE highlight ADD CONSTRAINT FK_C998D834DCF9352B FOREIGN KEY (bottle_id) REFERENCES bottles (id)');
        $this->addSql('ALTER TABLE origins ADD CONSTRAINT FK_E1DF033E98260155 FOREIGN KEY (region_id) REFERENCES regions (id)');
        $this->addSql('ALTER TABLE origins ADD CONSTRAINT FK_E1DF033E8AC6BB8A FOREIGN KEY (cepage_id) REFERENCES cepages (id)');
        $this->addSql('ALTER TABLE origins ADD CONSTRAINT FK_E1DF033E89B658FE FOREIGN KEY (producer_id) REFERENCES producers (id)');
        $this->addSql('ALTER TABLE rates ADD CONSTRAINT FK_44D4AB3CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE rates ADD CONSTRAINT FK_44D4AB3CDCF9352B FOREIGN KEY (bottle_id) REFERENCES bottles (id)');
        $this->addSql('ALTER TABLE regions ADD CONSTRAINT FK_A26779F3A6E44244 FOREIGN KEY (pays_id) REFERENCES pays (id)');
        $this->addSql('ALTER TABLE wine_profile ADD CONSTRAINT FK_4979629AC54C8C93 FOREIGN KEY (type_id) REFERENCES types (id)');
        $this->addSql('ALTER TABLE wine_profile ADD CONSTRAINT FK_4979629A9A99E1B9 FOREIGN KEY (bio_id) REFERENCES bio (id)');
        $this->addSql('ALTER TABLE wine_profile ADD CONSTRAINT FK_4979629A9DB31FD2 FOREIGN KEY (sulfite_id) REFERENCES sulfite (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE bottles DROP FOREIGN KEY FK_A3C3D9A76ED395');
        $this->addSql('ALTER TABLE bottles DROP FOREIGN KEY FK_A3C3D956A273CC');
        $this->addSql('ALTER TABLE bottles DROP FOREIGN KEY FK_A3C3D9E8D738E2');
        $this->addSql('ALTER TABLE caves DROP FOREIGN KEY FK_1AD0C160A76ED395');
        $this->addSql('ALTER TABLE caves_bottles DROP FOREIGN KEY FK_F604852C7AA43AD1');
        $this->addSql('ALTER TABLE caves_bottles DROP FOREIGN KEY FK_F604852C4B11BD50');
        $this->addSql('ALTER TABLE comments_bottles DROP FOREIGN KEY FK_D6A3015A76ED395');
        $this->addSql('ALTER TABLE comments_bottles DROP FOREIGN KEY FK_D6A3015DCF9352B');
        $this->addSql('ALTER TABLE comments_highlight DROP FOREIGN KEY FK_8A63EE19A76ED395');
        $this->addSql('ALTER TABLE comments_highlight DROP FOREIGN KEY FK_8A63EE19F216DCD4');
        $this->addSql('ALTER TABLE highlight DROP FOREIGN KEY FK_C998D8347F05B85');
        $this->addSql('ALTER TABLE highlight DROP FOREIGN KEY FK_C998D834DCF9352B');
        $this->addSql('ALTER TABLE origins DROP FOREIGN KEY FK_E1DF033E98260155');
        $this->addSql('ALTER TABLE origins DROP FOREIGN KEY FK_E1DF033E8AC6BB8A');
        $this->addSql('ALTER TABLE origins DROP FOREIGN KEY FK_E1DF033E89B658FE');
        $this->addSql('ALTER TABLE rates DROP FOREIGN KEY FK_44D4AB3CA76ED395');
        $this->addSql('ALTER TABLE rates DROP FOREIGN KEY FK_44D4AB3CDCF9352B');
        $this->addSql('ALTER TABLE regions DROP FOREIGN KEY FK_A26779F3A6E44244');
        $this->addSql('ALTER TABLE wine_profile DROP FOREIGN KEY FK_4979629AC54C8C93');
        $this->addSql('ALTER TABLE wine_profile DROP FOREIGN KEY FK_4979629A9A99E1B9');
        $this->addSql('ALTER TABLE wine_profile DROP FOREIGN KEY FK_4979629A9DB31FD2');
        $this->addSql('DROP TABLE bio');
        $this->addSql('DROP TABLE bottles');
        $this->addSql('DROP TABLE caves');
        $this->addSql('DROP TABLE caves_bottles');
        $this->addSql('DROP TABLE cepages');
        $this->addSql('DROP TABLE comments_bottles');
        $this->addSql('DROP TABLE comments_highlight');
        $this->addSql('DROP TABLE highlight');
        $this->addSql('DROP TABLE origins');
        $this->addSql('DROP TABLE pays');
        $this->addSql('DROP TABLE producers');
        $this->addSql('DROP TABLE rates');
        $this->addSql('DROP TABLE regions');
        $this->addSql('DROP TABLE sulfite');
        $this->addSql('DROP TABLE types');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE wine_profile');
        $this->addSql('DROP TABLE messenger_messages');
    }
}

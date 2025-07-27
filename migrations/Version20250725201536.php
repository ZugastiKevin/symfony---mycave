<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250725201536 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Ajoute la France et ses anciennes régions dans la base de données';
    }

    public function up(Schema $schema): void
    {
        // bloc vins cepages
        // type de vins
        $this->addSql("INSERT INTO types (id, label) VALUES (1, 'Rouge');");
        $this->addSql("INSERT INTO types (id, label) VALUES (2, 'Blanc');");
        $this->addSql("INSERT INTO types (id, label) VALUES (3, 'Rosé');");
        $this->addSql("INSERT INTO types (id, label) VALUES (4, 'Effervescent');");



        // Rouges
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (1, 1, 'Cabernet Sauvignon');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (2, 1, 'Merlot');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (3, 1, 'Pinot Noir');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (4, 1, 'Syrah');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (5, 1, 'Grenache');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (6, 1, 'Malbec');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (7, 1, 'Tempranillo');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (8, 1, 'Sangiovese');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (9, 1, 'Zinfandel');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (10, 1, 'Nebbiolo');");



        // Blancs
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (11, 2, 'Chardonnay');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (12, 2, 'Sauvignon Blanc');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (13, 2, 'Riesling');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (14, 2, 'Gewürztraminer');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (15, 2, 'Viognier');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (16, 2, 'Muscadet');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (17, 2, 'Chenin Blanc');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (18, 2, 'Pinot Blanc');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (19, 2, 'Marsanne');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (20, 2, 'Roussanne');");



        // Rosés
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (21, 3, 'Cinsault');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (22, 3, 'Grenache Gris');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (23, 3, 'Tibouren');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (24, 3, 'Carignan Gris');");



        // Effervescents
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (25, 4, 'Pinot Meunier');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (26, 4, 'Chardonnay');");
        $this->addSql("INSERT INTO cepages (id, types_id, label) VALUES (27, 4, 'Pinot Noir');");



        // bloc pays regions
        // Pays
        $this->addSql("INSERT INTO pays (id, label) VALUES (1, 'France');");
        $this->addSql("INSERT INTO pays (id, label) VALUES (2, 'Italie');");
        $this->addSql("INSERT INTO pays (id, label) VALUES (3, 'Espagne');");
        $this->addSql("INSERT INTO pays (id, label) VALUES (4, 'Allemagne');");
        $this->addSql("INSERT INTO pays (id, label) VALUES (5, 'Argentine');");
        $this->addSql("INSERT INTO pays (id, label) VALUES (6, 'Australie');");
        $this->addSql("INSERT INTO pays (id, label) VALUES (7, 'Chili');");
        $this->addSql("INSERT INTO pays (id, label) VALUES (8, 'États-Unis');");
        $this->addSql("INSERT INTO pays (id, label) VALUES (9, 'Portugal');");
        $this->addSql("INSERT INTO pays (id, label) VALUES (10, 'Afrique du Sud');");
        $this->addSql("INSERT INTO pays (id, label) VALUES (11, 'Grèce');");
        $this->addSql("INSERT INTO pays (id, label) VALUES (12, 'Hongrie');");



        // France
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (186, 'Aude', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (187, 'Bouches-du-Rhône', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (188, 'Charente', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (189, 'Charente-Maritime', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (190, 'Cher', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (191, 'Côte-d\'Or', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (192, 'Drôme', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (193, 'Gard', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (194, 'Gers', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (195, 'Gironde', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (196, 'Hérault', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (197, 'Loire', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (198, 'Lot', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (199, 'Lot-et-Garonne', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (200, 'Maine-et-Loire', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (201, 'Marne', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (202, 'Moselle', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (203, 'Pyrénées-Atlantiques', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (204, 'Pyrénées-Orientales', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (205, 'Bas-Rhin', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (206, 'Haut-Rhin', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (207, 'Rhône', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (208, 'Savoie', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (209, 'Haute-Savoie', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (210, 'Saône-et-Loire', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (211, 'Tarn', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (212, 'Var', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (213, 'Vaucluse', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (214, 'Vendée', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (215, 'Vienne', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (216, 'Yonne', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (239, 'Ain', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (240, 'Tarn-et-Garonne', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (241, 'Dordogne', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (242, 'Haute-Garonne', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (243, 'Deux-Sèvres', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (244, 'Ariège', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (245, 'Indre-et-Loire', 1);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (246, 'Haute-Marne', 1);");



        // Italie
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (102, 'Abruzzes', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (103, 'Basilicate', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (104, 'Calabre', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (105, 'Campanie', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (106, 'Émilie-Romagne', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (107, 'Frioul-Vénétie julienne', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (108, 'Latium', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (109, 'Ligurie', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (110, 'Lombardie', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (111, 'Marches', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (112, 'Molise', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (113, 'Piémont', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (114, 'Pouilles', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (115, 'Sardaigne', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (116, 'Sicile', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (117, 'Toscane', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (118, 'Trentin-Haut-Adige', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (119, 'Ombrie', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (120, 'Vallée d\'Aoste', 2);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (121, 'Vénétie', 2);");



        // Espagne
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (122, 'Andalousie', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (123, 'Aragon', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (124, 'Asturies', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (125, 'Îles Baléares', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (126, 'Pays Basque', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (127, 'Îles Canaries', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (128, 'Cantabrie', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (129, 'Castille-La Manche', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (130, 'Castille-et-León', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (131, 'Catalogne', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (132, 'Estrémadure', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (133, 'Galice', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (134, 'La Rioja', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (135, 'Communauté de Madrid', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (136, 'Murcie', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (137, 'Navarre', 3);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (138, 'Communauté valencienne', 3);");



        // Allemagne
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (139, 'Bade', 4);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (140, 'Franconie', 4);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (141, 'Hesse rhénane', 4);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (142, 'Moselle', 4);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (143, 'Palatinat', 4);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (144, 'Nahe', 4);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (145, 'Wurtemberg', 4);");



        // Argentine
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (146, 'Mendoza', 5);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (147, 'San Juan', 5);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (148, 'Patagonie', 5);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (149, 'Salta', 5);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (150, 'La Rioja', 5);");



        // Australie
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (151, 'Barossa Valley', 6);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (152, 'McLaren Vale', 6);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (153, 'Hunter Valley', 6);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (154, 'Yarra Valley', 6);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (155, 'Margaret River', 6);");



        // Chili
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (156, 'Valle Central', 7);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (157, 'Maipo', 7);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (158, 'Colchagua', 7);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (159, 'Casablanca', 7);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (160, 'Aconcagua', 7);");


        
        // États-Unis
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (161, 'Napa Valley', 8);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (162, 'Sonoma', 8);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (163, 'Paso Robles', 8);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (164, 'Willamette Valley', 8);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (165, 'Columbia Valley', 8);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (308, 'Columbia Valley', 8);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (309, 'Yakima Valley', 8);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (310, 'Walla Walla Valley', 8);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (311, 'Red Mountain', 8);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (312, 'Horse Heaven Hills', 8);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (318, 'Rogue Valley', 8);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (319, 'Umpqua Valley', 8);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (320, 'Eola-Amity Hills', 8);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (321, 'North Fork of Long Island', 8);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (322, 'Hudson River Region', 8);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (323, 'Niagara Escarpment', 8);");



        // Portugal
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (166, 'Douro', 9);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (167, 'Alentejo', 9);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (168, 'Dao', 9);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (169, 'Bairrada', 9);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (170, 'Vinho Verde', 9);");


        
        // Afrique du Sud
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (171, 'Stellenbosch', 10);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (172, 'Paarl', 10);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (173, 'Constantia', 10);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (174, 'Walker Bay', 10);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (175, 'Swartland', 10);");



        // Grèce
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (176, 'Macédoine', 11);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (177, 'Péloponnèse', 11);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (178, 'Crète', 11);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (179, 'Santorin', 11);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (180, 'Thessalie', 11);");


        
        // Hongrie
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (181, 'Tokaj', 12);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (182, 'Eger', 12);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (183, 'Villány', 12);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (184, 'Sopron', 12);");
        $this->addSql("INSERT INTO regions (id, label, pays_id) VALUES (185, 'Balaton', 12);");

    }

    public function down(Schema $schema): void
    {
        $this->addSql("DELETE FROM types WHERE id BETWEEN 1 AND 4;");
        $this->addSql("DELETE FROM cepages WHERE id BETWEEN 1 AND 27;");
        $this->addSql("DELETE FROM pays WHERE id BETWEEN 1 AND 12;");
        $this->addSql("DELETE FROM regions WHERE id BETWEEN 1 AND 323;");
    }
}

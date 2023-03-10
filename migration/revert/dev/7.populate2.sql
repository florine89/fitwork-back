-- Revert fitwork:7.populate2 from pg

BEGIN;

TRUNCATE category, article CASCADE;

INSERT INTO
    "category"("name")
VALUES (
        'bonjour'
    ), (
        'au revoir'
    );
-- ---------------------------------------------------------------------
INSERT INTO
        "article"
       ("title", "description","time","image","type","category_id","user_id")
VALUES ('bonjour','un petit conseil pour dire bonjour',NULL,NULL,'conseil',1,2), 
       ('saluer','une petite activité pour dire bonjour','00:03:00',NULL,'activité',1,2);

COMMIT;
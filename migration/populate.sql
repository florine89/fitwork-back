BEGIN;

INSERT INTO
    "category"("name")
VALUES (
        'bonjour'
    ), (
        'au revoir'
    );
-- ---------------------------------------------------------------------
INSERT INTO
    "label"("name")
VALUES ('salutations'),('étirement');
-- ---------------------------------------------------------------------
INSERT INTO
    "role"("label")
VALUES ('member'), ('admin');
-- ---------------------------------------------------------------------
INSERT INTO
    "user"(
        "firstname",
        "lastname",
        "email",
        "birth_date",
        "password",
        "gender",
        "role_id"
    )
VALUES ('Jon','Sérien','j.serien@idiot.com','1985/05/23','toto','male',1),('Rocky','Balboa','r.balboa@tapefort.com','19450706','toto','male',2);
-- ---------------------------------------------------------------------
INSERT INTO
        "article"
       ("title", "decription","time","image","slug","category_id","user_id")
VALUES ('bonjour','un petit conseil pour dire bonjour',NULL,NULL,'conseil',1,2), 
       ('saluer','une petite activité pour dire bonjour','00:03:00',NULL,'activité',1,2);
-- ---------------------------------------------------------------------
INSERT INTO
    "favorite"("user_id", "article_id")
VALUES(1, 1), (1, 2);
-- ---------------------------------------------------------------------
INSERT INTO
    "program" ("user_id", "article_id")
VALUES (1, 2);
-- ---------------------------------------------------------------------
INSERT INTO
    "article_has_label"("article_id", "label_id")
VALUES (1, 1), (2, 1);

COMMIT;
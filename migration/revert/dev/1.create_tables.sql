-- Revert fitwork:1.create_tables from pg

BEGIN;

DROP TABLE
    IF EXISTS "article",
    "category",
    "label",
    "role",
    "user",
    "favorite",
    "program",
    "article_has_label";


COMMIT;

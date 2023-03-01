-- SQLBook: Code
-- Revert fitwork:4.cascade_article from pg

BEGIN;

-- XXX Add DDLs here.
ALTER TABLE favorite 
DROP CONSTRAINT favorite_article_id_fkey ;

ALTER TABLE favorite
ADD CONSTRAINT favorite_article_id_fkey 
FOREIGN KEY (user_id)
REFERENCES "user"(id);

ALTER TABLE program
DROP CONSTRAINT program_article_id_fkey;

ALTER TABLE program
ADD CONSTRAINT program_article_id_fkey
FOREIGN KEY (user_id)
REFERENCES "user"(id);

ALTER TABLE article
RENAME COLUMN "type" TO slug;
COMMIT;

-- Deploy fitwork:4.cascade_article to pg

BEGIN;

ALTER TABLE favorite
DROP CONSTRAINT favorite_article_id_fkey;

ALTER TABLE favorite
ADD CONSTRAINT favorite_article_id_fkey 
FOREIGN KEY (article_id)
REFERENCES article(id)
ON DELETE CASCADE;

ALTER TABLE program 
DROP CONSTRAINT program_article_id_fkey;

ALTER TABLE program
ADD CONSTRAINT program_article_id_fkey  
FOREIGN KEY (article_id)
REFERENCES article(id)
ON DELETE CASCADE;

ALTER TABLE article_has_label
DROP CONSTRAINT article_has_label_article_id_fkey;

ALTER TABLE article_has_label
ADD CONSTRAINT article_has_label_article_id_fkey
FOREIGN KEY (article_id)
REFERENCES article(id)
ON DELETE CASCADE;

ALTER TABLE article
RENAME COLUMN slug TO "type";

COMMIT;

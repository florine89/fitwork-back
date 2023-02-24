-- Deploy fitwork:3.delete+gender to pg

BEGIN;

ALTER TABLE article 
DROP CONSTRAINT article_user_id_fkey;

ALTER TABLE article
ADD CONSTRAINT article_user_id_fkey 
FOREIGN KEY (user_id)
REFERENCES "user"(id)
ON DELETE CASCADE;

ALTER TABLE favorite 
DROP CONSTRAINT favorite_user_id_fkey;
ALTER TABLE favorite
ADD CONSTRAINT favorite_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES "user"(id)
ON DELETE CASCADE;

ALTER TABLE program
DROP CONSTRAINT program_user_id_fkey;

ALTER TABLE program
ADD CONSTRAINT program_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES "user"(id)
ON DELETE CASCADE;

ALTER TABLE "user" DROP COLUMN gender;

ALTER TABLE "user" ALTER COLUMN role_id SET DEFAULT 2;

COMMIT;

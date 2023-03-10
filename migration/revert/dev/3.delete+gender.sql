-- Revert fitwork:3.delete+gender from pg

BEGIN;

ALTER TABLE article 
DROP CONSTRAINT article_user_id_fkey;
ALTER TABLE article
ADD CONSTRAINT article_user_id_fkey 
FOREIGN KEY (user_id)
REFERENCES "user"(id);

ALTER TABLE favorite 
DROP CONSTRAINT favorite_user_id_fkey;
ALTER TABLE favorite
ADD CONSTRAINT favorite_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES "user"(id);

ALTER TABLE program
DROP CONSTRAINT program_user_id_fkey;
ALTER TABLE program
ADD CONSTRAINT program_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES "user"(id);


ALTER TABLE "user" ADD COLUMN "gender" TEXT;
ALTER TABLE "user" ALTER COLUMN role_id DROP DEFAULT;
commit;

-- Revert fitwork:5.add_program_id from pg

BEGIN;

ALTER TABLE "favorite"
DROP COLUMN IF EXISTS id;


COMMIT;

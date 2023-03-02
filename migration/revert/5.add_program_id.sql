-- Revert fitwork:5.add_program_id from pg

BEGIN;

ALTER TABLE "program"
DROP COLUMN id;


COMMIT;

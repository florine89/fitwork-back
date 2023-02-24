-- Revert fitwork:2.alter_mail from pg

BEGIN;

ALTER TABLE "user" DROP CONSTRAINT IF EXISTS unique_mail;

COMMIT;

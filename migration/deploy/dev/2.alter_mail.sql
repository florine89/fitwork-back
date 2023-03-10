-- Deploy fitwork:2.alter_mail to pg

BEGIN;

ALTER TABLE "user" ADD CONSTRAINT unique_mail UNIQUE (email);
COMMIT;

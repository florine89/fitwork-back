-- Deploy fitwork:5.add_program_id to pg

BEGIN;

ALTER TABLE program
ADD COLUMN id SERIAL PRIMARY KEY;

COMMIT;

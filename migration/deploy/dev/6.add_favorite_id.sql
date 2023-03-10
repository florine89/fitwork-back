-- Deploy fitwork:5.add_program_id to pg

BEGIN;

ALTER TABLE favorite
ADD COLUMN id SERIAL PRIMARY KEY;

COMMIT;

-- Verify fitwork:5.add_program_id on pg

BEGIN;

SELECT * FROM program LIMIT 1;

ROLLBACK;

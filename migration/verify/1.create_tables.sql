-- Verify fitwork:1.create_tables on pg

BEGIN;

SELECT * from "article";

SELECT * from "program" where "user_id"=1;
ROLLBACK;

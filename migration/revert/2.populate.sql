-- Revert fitwork:2.populate from pg

BEGIN;

TRUNCATE TABLE
    article,
    category,
    label,
    role,
    "user",
    favorite,-- association table for user_like_article
    program,-- association table  for user_programs_article
    article_has_label;

COMMIT;

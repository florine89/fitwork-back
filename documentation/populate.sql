BEGIN;

INSERT INTO
    "publisher"("id", "name", "website")
VALUES (1, 'Babel', 'www.acte-sud.fr'), (
        2,
        'penguin',
        'www.penguin.com'
    );

INSERT INTO
    "book"(
        "id",
        "title",
        "pages",
        "publication",
        "ISBN",
        "publisher_id"
    )
VALUES (
        1,
        'Le problème à trois corps',
        496,
        '2016',
        '978-2-330-11355-1',
        1
    ), (
        2,
        'And other things, Douglas Adam''s H2G2 part Six of Three',
        340,
        '2010',
        '978-0-141-04213-8',
        2
    );

INSERT INTO
    "reader"("id", "pseudo", "password")
VALUES (
        1,
        'anthalius',
        '$2y$10$jaQcdwvgBJbJhZdphCLGf.f1b59SYGBdO/HIohmqpdpVgt8AvPTc2'
    );

INSERT INTO
    "genre"("id", "name")
VALUES (1, 'hard science-fiction'), (2, 'comic science-fiction');

INSERT INTO
    "author"(
        "id",
        "firstname",
        "lastname",
        "nationality"
    )
VALUES (1, 'Liu', 'Cixin', 'chinois'), (
        2,
        'Eoin',
        'Colfer',
        'irlandais'
    );

INSERT INTO
    "book_has_author"("id", "book_id", "author_id")
VALUES(1, 1, 1), (2, 2, 2);

INSERT INTO
    "book_has_genre" ("id", "book_id", "genre_id")
VALUES (1, 1, 1), (2, 2, 2);

INSERT INTO
    "book_has_reader"("id", "book_id", "reader_id")
VALUES (1, 1, 1), (2, 2, 1);

COMMIT;
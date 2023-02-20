CREATE DATABASE ARTICLES;
\c ARTICLES;

CREATE TABLE ARTICLE (
  code_article VARCHAR(42),
  slug VARCHAR(42),
  titre VARCHAR(42),
  description VARCHAR(42),
  temps VARCHAR(42),
  image VARCHAR(42),
  code_utilisateur VARCHAR(42),
  code_categorie VARCHAR(42),
  PRIMARY KEY (code_article)
);

CREATE TABLE CATEGORIE (
  code_categorie VARCHAR(42),
  nom VARCHAR(42),
  PRIMARY KEY (code_categorie)
);

CREATE TABLE LABEL (
  code_label VARCHAR(42),
  nom VARCHAR(42),
  PRIMARY KEY (code_label)
);

CREATE TABLE ROLE (
  code_role VARCHAR(42),
  label VARCHAR(42),
  PRIMARY KEY (code_role)
);

CREATE TABLE UTILISATEUR (
  code_utilisateur VARCHAR(42),
  nom VARCHAR(42),
  prénom VARCHAR(42),
  email VARCHAR(42),
  date_naissance VARCHAR(42),
  genre VARCHAR(42),
  password VARCHAR(42),
  code_role VARCHAR(42),
  PRIMARY KEY (code_utilisateur)
);

CREATE TABLE AIMER (
  code_utilisateur VARCHAR(42),
  code_article VARCHAR(42),
  PRIMARY KEY (code_utilisateur, code_article)
);

CREATE TABLE DÉCRIRE (
  code_label VARCHAR(42),
  code_article VARCHAR(42),
  PRIMARY KEY (code_label, code_article)
);

CREATE TABLE PROGRAMMER (
  code_utilisateur VARCHAR(42),
  code_article VARCHAR(42),
  status VARCHAR(42),
  PRIMARY KEY (code_utilisateur, code_article)
);

ALTER TABLE ARTICLE ADD FOREIGN KEY (code_categorie) REFERENCES CATEGORIE (code_categorie);
ALTER TABLE ARTICLE ADD FOREIGN KEY (code_utilisateur) REFERENCES UTILISATEUR (code_utilisateur);
ALTER TABLE UTILISATEUR ADD FOREIGN KEY (code_role) REFERENCES ROLE (code_role);
ALTER TABLE AIMER ADD FOREIGN KEY (code_article) REFERENCES ARTICLE (code_article);
ALTER TABLE AIMER ADD FOREIGN KEY (code_utilisateur) REFERENCES UTILISATEUR (code_utilisateur);
ALTER TABLE DÉCRIRE ADD FOREIGN KEY (code_article) REFERENCES ARTICLE (code_article);
ALTER TABLE DÉCRIRE ADD FOREIGN KEY (code_label) REFERENCES LABEL (code_label);
ALTER TABLE PROGRAMMER ADD FOREIGN KEY (code_article) REFERENCES ARTICLE (code_article);
ALTER TABLE PROGRAMMER ADD FOREIGN KEY (code_utilisateur) REFERENCES UTILISATEUR (code_utilisateur);
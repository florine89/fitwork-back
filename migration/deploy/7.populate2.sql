BEGIN;

TRUNCATE category, article CASCADE;

INSERT INTO
    "category"("name")
VALUES ('Exercice au bureau'),
    ('Bien être au bureau');
-- ---------------------------------------------------------------------
INSERT INTO
        "article"
       ("title", "description","time","image","type","category_id","user_id")
VALUES ('Abdos au bureau','Soulève tes jambes en posant tes mains sur ta chaise ou sur ton bureau.','00:01:00','abdoaubureau.png','Activité',3,1),
    ('Étires tes jambes','En position debout, tu vas étirer une jambe après l''autre, N''hésite pas à t''aider de ton bureau pour faciliter l''étirement.','00:00:45','etirementbureau.png','Activité',3,1),
    ('Prends une pause','N''oublies pas de prendre des petites pauses dans la journée pour t''aérer, te déconnecter, et revenir en force sur tes tâches ! Tu seras beaucoup plus productif.','00:05:00','pause.jpg','Conseil',4,1),
    ('Moment de récapitulatif de tes tâches','Prends un papier, un stylo et note ce que tu as déjà accomplie, puis ce qu''il te reste à faire ! N''oublies pas de te donner des objectifs journalier motivants et atteignables !','00:05:00','todoimage.png','Conseil',4,1),
    ('Respiration anti-stress','En position assise, le dos redressé et les épaules relâchées. Inspirer par le nez, profondément, pendant 4 secondes, Retenez votre respiration pendant 7 secondes, Expirez profondément par le nez (ou la bouche), pendant 8 secondes.','00:00:19','stressrespiration.jpg','Activité',4,1),
    ('Exercice Jambes','L''une après l''autre, lève tes jambes. Idéalement, gardes le rythme pendant 3 minutes.','00:03:00','etirementjambe2.png','Activité',3,1),
    ('Exercies Jambes et fessier','Un peu plus dynamique, monte et redescend en gardant le dos droit, tout comme un squat !','00:01:00','exerciceJambe.png','Activité',3,1);

COMMIT;
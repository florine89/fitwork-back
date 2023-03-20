BEGIN;

  INSERT INTO
     "category"("name")
  VALUES ('Exercices au bureau'),
      ('Bien être au bureau');
-- -- -- ---------------------------------------------------------------------
  INSERT INTO
      "label"("name")
 VALUES ('salutations'),('étirement');
-- -- -- ---------------------------------------------------------------------
 INSERT INTO
      "role"("label")
  VALUES ('coach'), ('member');
-- ---------------------------------------------------------------------
  INSERT INTO
   "user"(
      "firstname",
        "lastname",
        "email",
       "birth_date",
       "password",
         "role_id"
      )
  VALUES ('Jon','Sérien','j.serien@idiot.com','19850523','$2y$10$zDrsxe6uhYIybLJ1ka.aLOEcR7iDa8gF0r0Opatu.C9J1auQ8EEZ.',1),('Rocky','Balboa','r.balboa@tapefort.com','19450706','$2y$10$zDrsxe6uhYIybLJ1ka.aLOEcR7iDa8gF0r0Opatu.C9J1auQ8EEZ.',2);
-- -- ---------------------------------------------------------------------
 INSERT INTO
        "article"
        ("title", "description","time","image","type","category_id","user_id")
 VALUES ('Abdos au bureau','Soulève tes jambes en posant tes mains sur ta chaise ou sur ton bureau.','00:01:00','abdoaubureau.png','Activité',1,1),
     ('Étire tes jambes','En position debout, tu vas étirer une jambe après l''autre, N''hésite pas à t''aider de ton bureau pour faciliter l''étirement.','00:00:45','etirementbureau.png','Activité',1,1),
     ('Prends une pause','N''oublie pas de prendre de petites pauses dans la journée pour t''aérer, te déconnecter, et revenir en force sur tes tâches ! Tu seras beaucoup plus productif.','00:05:00','pause.jpg','Conseil',2,1),
     ('Moment de récapitulatif de tes tâches','Prend un papier, un stylo et note ce que tu as déjà accomplie, puis ce qu''il te reste à faire ! N''oublies pas de te donner des objectifs journalier motivants et atteignables !','00:05:00','todoimage.png','Conseil',2,1),
     ('Respiration anti-stress','En position assise, le dos redressé et les épaules relâchées, Inspire par le nez, profondément, pendant 4 secondes, Retiens ta respiration pendant 7 secondes, Expire profondément par le nez (ou la bouche), pendant 8 secondes.','00:00:19','stressrespiration.jpg','Activité',2,1),
     ('Exercice Jambes','L''une après l''autre, lève tes jambes. Idéalement, gardes le rythme pendant 3 minutes.','00:03:00','etirementjambe2.png','Activité',1,1),
     ('Exercices Jambes et fessier','Un peu plus dynamique, monte et redescend en gardant le dos droit, tout comme un squat !','00:01:00','exerciceJambe.png','Activité',1,1),
     ('Emotions de la journée','Prends un moment pour faire un récapitulatif de ton stress. Tu peux te poser ce genre de questions: Qu''est ce qui t''a stressé aujourd''hui ? Ce qui t''a rendu heureux ? As-tu été fière de ce que tu as accomplis … Tu peux tout noter afin de noter les points à améliorer ','00:00:45','emotions.jpg','Conseil',2,1),
     ('Prends l’air','Il est temps de prendre une petite pause extérieure ! Prends l''air et aère toi l''esprit!','00:05:00','prendrelair.jpg','Conseil',2,1),
     ('Entraide','Tu en as plein la tête et tu n''arrives pas à trouver de réponses et de solutions ? Demandes de l''aide à tes collègues ! Un coup de pouce va certainement te débloquer.','00:05:00','goodvibes.jpg','Conseil',2,1),
     ('Entre collègues !','Propose à un ou plusieurs collègues un déjeuner, une pause, un moment «fun», cela permet d''installer un climat détente au sein de l''équipe et favoriser une bonne ambiance au bureau!','00:05:00','pausetime.jpg','Conseil',2,1),
     ('Etirement latéral','D''un côté puis de l''autre, étires-toi latéralement tout en respirant profondément. Maintiens ça pendant 1min30.','00:01:30','etirementcote.png','Activité',1,1),
     ('Bras engourdis','Appuies-toi sur ta table de bureau et fais des mouvements de va et vient, comme des pompes au sol, pendant 45 secondes. Répète le 2 fois si tu en ressens le besoin.','00:00:45','pompes.png','Activité',1,1);
  
COMMIT;
Use burger_db;

INSERT INTO burgers (name) VALUES ('chicken burger');
INSERT INTO burgers (name) VALUES ('ham burger');
INSERT INTO burgers (name, eaten) VALUES ('Fish burger', true);
INSERT INTO burgers (name, eaten) VALUES ('Steak burger', true);
INSERT INTO burgers (name, eaten) VALUES ('Bacon Egg burger', true);
INSERT INTO burgers (name) VALUES ('Schnitzel Burger');

SELECT * from burgers;
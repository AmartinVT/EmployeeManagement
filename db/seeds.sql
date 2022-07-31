INSERT INTO department (id, names)
VALUES 
    (1, "Engineering"),
    (2, "Software Development"),
    (3, "Management"),
    (4, "Senior Leadership");

INSERT INTO roles (id, title, salary, department_id)
VALUES 
    (1, "Industrial Engineer", 75000, 1),
    (2, "Mechanical Engineer", 75000, 1), 
    (3, "Aerospace Engineer", 85000, 1), 
    (4, "Associate Programmer", 72000, 2), 
    (5, "Computer Vision Developer", 90000, 2), 
    (6, "Sr. IE & Inno Manager", 120000, 3), 
    (7, "Operations Manager", 100000, 3), 
    (8, "VP QA & Mfg. Engineering", 185000, 4);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "Jack", "Wellington", 1, 6),
    (2, "Louie", "Morris", 2, 6),
    (3, "Rocky", "Scientist", 3, 6),
    (4, "Billie", "Gates", 4, 6),
    (5, "Augie", "Meta", 5, 6),
    (6, "Aster", "Martinez", 6, 8),
    (7, "Patrice", "DuPont", 7, 9),
    (8, "Alonoso", "Rubarb", 8, null),
    (9, "Philly", "Huntman", 9, null);

        
INSERT INTO department (names)
VALUES 
    ("Engineering"),
    ("Software Development"),
    ("Management"),
    ("Senior Leadership");

INSERT INTO roles (title, salary, department_id)
VALUES 
    ("Industrial Engineer", 75000, 1),
    ("Mechanical Engineer", 75000, 1), 
    ("Aerospace Engineer", 85000, 1), 
    ("Associate Programmer", 72000, 2), 
    ("Computer Vision Developer", 90000, 2), 
    ("Sr. IE & Inno Manager", 120000, 3), 
    ("Operations Manager", 100000, 3), 
    ("VP QA & Mfg. Engineering", 185000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ("Jack", "Wellington", 1, 6),
    ("Louie", "Morris", 2, 6),
    ("Rocky", "Scientist", 3, 6),
    ("Billie", "Gates", 4, 6),
    ("Augie", "Meta", 5, 6),
    ("Aster", "Martinez", 6, 8),
    ("Patrice", "DuPont", 7, 9),
    ("Alonoso", "Rubarb", 8, null),
    ("Philly", "Huntman", 9, null);

        
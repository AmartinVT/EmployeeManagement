INSERT INTO department(names)
VALUES 
    ("Engineering"), --1--
    ("Software Development"), --2--
    ("Management"), --3--
    ("Senior Leadership"); --4--

INSERT INTO roles(title, salary, department_id)
VALUES 
    ("Industrial Engineer", 75000, 1), --1--
    ("Mechanical Engineer", 75000, 1), --2--
    ("Aerospace Engineer", 85000, 1), --3--
    ("Associate Programmer", 72000, 2), --4--
    ("Computer Vision Developer", 90000, 2), --5--
    ("Sr. IE & Inno Manager", 120000, 3), --6--
    ("Operations Manager", 100000, 3), --7--
    ("VP QA & Mfg. Engineering", 185000, 4), --8--
    ("Director of Assembly Ops", 165000, 4); --9--

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    (Jack, Wellington, 1, 6), --1--
    (Louie, Morris, 2, 6), --2--
    (Rocky, Scientist, 3, 6), --3--
    (Billie, Gates, 4, 6), --4--
    (Augie, Meta, 5, 6), --5--
    (Aster, Martinez, 6, 8), --6--
    (Patrice, DuPont, 7, 9), --7--
    (Alonoso, Rubarb, 8, null), --8--
    (Philly, Huntman, 9), null; --9--

        
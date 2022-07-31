-- Remove old database if a new database is created --
DROP DATABASE IF EXISTS employee_db;

-- Creates the "employee_db" database for storing name, department, role, and salary info--
CREATE DATABASE employee_db;

-- Use the employee_db --
USE employee_db;

-- Creates the table "department" within employee_db --
CREATE TABLE department (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT AUTO_INCREMENT PRIMARY KEY,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(100)
);

-- Creates the table "role" within employee_db --
CREATE TABLE role (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT AUTO_INCREMENT PRIMARY KEY,
  -- Columns for title, salary, and department ID --
  title VARCHAR(100),
  salary DECIMAL,
  department_id INT,
  FOREGIN KEY (department_id) REFERENCES department(id)
);

-- Creates the table "employee" within employee_db --
CREATE TABLE employee (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT AUTO_INCREMENT PRIMARY KEY, 
  -- Makes columns for first name, last name, role ID, and manager ID --
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  role_id INT,
  manager_id INT,
  FOREGIN KEY (role_id) REFERENCES role(id)
);
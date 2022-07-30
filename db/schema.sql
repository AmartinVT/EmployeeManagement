-- Remove old database if a new database is created --
DROP DATABASE IF EXISTS employee_db;

-- Creates the "employee_db" database for storing name, department, role, and salary info--
CREATE DATABASE employee_db;

-- Use the employee_db --
USE employee_db;

-- Creates the table "emp_names" within books_db --
CREATE TABLE emp_names (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(100)
);
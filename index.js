// Dependencies
import inquirer from 'inquirer';
import { createConnection } from 'mysql2';
import tables from 'console.table';

// Server connection
const db = createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: 'porkchop',
    database: 'employee_db',
    multipleStatements: true
    },
    console.log("Connection successful!!!")
    );

// User prompts
function userInput(){
    inquirer.prompt({
        name: 'userSelection',
        type: 'list',
        message: 'Welcome! Please select an option from the below list using ARROW KEYS + ENTER',
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role"
        ],
    }).then(function(selection){
        if (selection.userSelection === "View all departments") {
            getDept();
        } 
        
        else if (selection.userSelection === "View all roles") {
            getRoles();
        }

        else if (selection.userSelection === "View all employees") {
            getEmployee();
        }

        else if (selection.userSelection === "Add a department") {
            postDepartment();
        }

        else if (selection.userSelection === "Add a role") {
            postRoles();
        }

        else {
            postEmployee();
        }
    
    
    
    } // End .then statement function
    ) // End .then statement
} // End userInput()

// Server interactions


// GET statements
function getDept (){
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, result) =>{
        if (err) throw err;
        console.table(result);
        userInput();
    });
}

function getRoles (){
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, result) =>{
        if (err) throw err;
        console.table(result);
        userInput();
    });
}

function getEmployee (){
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, result) =>{
        if (err) throw err;
        console.table(result);
        userInput();
    });
}

// POST

function postDepartment (){
    const sql = `SELECT * FROM department`;
    inquirer.prompt({
        name: 'addDept',
        type: 'input',
        message: 'Please enter the name of the new department',
    }).then(function(selection){
        db.query(
            `INSERT INTO department (names) VALUES("${selection.addDept}");`
        )
        console.log("Successfully added new department record.");
        getDept();
        userInput();
    })
}

function postRoles (){
    const sql = `SELECT * FROM roles`;
    inquirer.prompt([
    {
        name: 'addRoles',
        type: 'input',
        message: 'Please enter the name of the new role',
    },
    {
        name: 'addSalary',
        type: 'input',
        message: 'Please enter the salary of the new role using ONLY numbers (no special characters or spaces!!!!)',
    }    
    ]).then(function(selection){
        db.query(
            `INSERT INTO roles (title, salary) VALUES("${selection.addRoles}",${selection.addSalary});`
        )
        console.log("Successfully added new role record.");
        getRoles();
        userInput();
    })
}

function postEmployee (){
    const sql = `SELECT * FROM employee`;
    const roles = db.query(`USE employee_db;SELECT DISTINCT title FROM roles;`);
    inquirer.prompt([
    {
        name: 'addFirst',
        type: 'input',
        message: 'Please enter the first name of the new employee',
    },
    {
        name: 'addLast',
        type: 'input',
        message: 'Please enter the last name of the new employee',
    },
    {
        name: 'addRole',
        type: 'list',
        message: 'Please select the role of the new employee using ARROW KEYS + ENTER',
        choices: [roles],
    }     
    ]).then(function(selection){
        db.query(
            `INSERT INTO employee (first_name, last_name, title) VALUES("${selection.addFirst}","${selection.addLast}","${selection.addRole}");`
        )
        console.log("Successfully added new employee record.");
        getEmployee();
        userInput();
    })
}

userInput();


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
            userInput();
        } 
        
        else if (selection.userSelection === "View all roles") {
            getRoles();
            userInput();
        }

        else if (selection.userSelection === "View all employees") {
            getEmployee();
            userInput();
        }

        else {
            postDepartment();
            userInput();
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
    });
}

function getRoles (){
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, result) =>{
        if (err) throw err;
        console.table(result);
    });
}

function getEmployee (){
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, result) =>{
        if (err) throw err;
        console.table(result);
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
            `INSERT INTO department 
            VALUES (COUNT(*)+1), ${selection.addDept}`
        )
        console.log("Successfully added new department record.");
        userInput();
    })
}

userInput();


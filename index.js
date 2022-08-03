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
        name: 'addMgr',
        type: 'list',
        message: 'Please select the manager of the new employee',
        choices: [
            "Aster Martinez",
            "Patrice DuPont",
            "Alonoso Rubarb",
            "Philly Huntman",
        ]
    },
    {
        name: 'addRole',
        type: 'list',
        message: 'Please select the role of the new employee',
        choices: [
            "Industrial Engineer",
            "Mechanical Engineer",
            "Aerospace Engineer",
            "Associate Programmer", 
            "Computer Vision Developer",
            "Sr. IE & Inno Manager",
            "Operations Manager",
            "VP QA & Mfg. Engineering",          
        ]
    }    
    ]).then(function(selection){

        function roleID(){
            if (selection.addRole="Industrial Engineer"){
                let addRoleID=1
                return addRoleID;
            }
            else if (selection.addRole="Mechanical Engineer"){
                let addRoleID=2;
                return addRoleID;
            }
            else if (selection.addRole="Aerospace Engineer"){
                let addRoleID=3;
                return addRoleID;
            }        
            else if (selection.addRole="Associate Programmer"){
                let addRoleID=4;
                return addRoleID;
            }
            else if (selection.addRole="Computer Vision Developer"){
                let addRoleID=5;
            }        
            else if (selection.addRole="Sr. IE & Inno Manager"){
                let addRoleID=6;
                return addRoleID;
            }        
            else if (selection.addRole="Operations Manager"){
                let addRoleID=7;
                return addRoleID;
            }
            else {
               let addRoleID=8;
               return addRoleID;
            }};

        function MgrID(){
            if (selection.addMgr="Aster Martinez"){
                let addMgrID=6
                return addMgrID;
            }
            else if (selection.addRole="Patrice DuPont"){
                let addMgrID=7;
                return addMgrID;
            }
            else if (selection.addRole="Alonoso Rubarb"){
                let addMgrID=8;
                return addMgrID;
            }
            else {
                let addMgrID=9;
                return addMgrID;
            }};                    
        
        let addRoleID = roleID();
        
        let addMgrID = MgrID();

        db.query(
            `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES("${selection.addFirst}","${selection.addLast}",${addRoleID},${addMgrID});`
        )
        console.log("Successfully added new employee record.");
        getEmployee();
        userInput();
    })
}

function updateRole(){
    inquirer.prompt[{
        name: 'empNameUpdate',
        type: 'list',
        message: 'Please select the name of the employee who you want to update',
        choices: [
            "Jack Wellington",
            "Louie Morris",
            "Rocky Scientist",
            "Billie Gates",
            "Augie Meta",
            "Aster Martinez",
            "Patrice DuPont",
            "Alonoso Rubarb",
            "Philly Huntman",
        ]
    }] 
}

userInput();


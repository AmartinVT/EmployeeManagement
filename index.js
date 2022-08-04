// Dependencies
import inquirer from 'inquirer';
import { createConnection } from 'mysql2';

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

        else if (selection.userSelection === "Add an employee") {
            postEmployee();
        }       

        else {
            updateRole();
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
            if (selection.addRole === "Industrial Engineer"){
                let addRoleID=1;
                return addRoleID;
            }
            else if (selection.addRole === "Mechanical Engineer"){
                let addRoleID=2;
                return addRoleID;
            }
            else if (selection.addRole === "Aerospace Engineer"){
                let addRoleID=3;
                return addRoleID;
            }        
            else if (selection.addRole === "Associate Programmer"){
                let addRoleID=4;
                return addRoleID;
            }
            else if (selection.addRole === "Computer Vision Developer"){
                let addRoleID=5;
                return addRoleID;
            }        
            else if (selection.addRole === "Sr. IE & Inno Manager"){
                let addRoleID=6;
                return addRoleID;
            }        
            else if (selection.addRole === "Operations Manager"){
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
    inquirer.prompt([
        {
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
        },
        
        {
        name: 'empRoleUpdate',
        type: 'list',
        message: 'Please select the new role for this employee',
        choices: [
            "Industrial Engineer",
            "Mechanical Engineer",
            "Aerospace Engineer",
            "Associate Programmer", 
            "Computer Vision Developer",
            "Sr. IE & Inno Manager",
            "Operations Manager",
            "VP QA & Mfg. Engineering",       
        ]}   
        ]).then(function(selection){
            
            function getEmpID(){
                if (selection.empNameUpdate === "Jack Wellington"){
                    let updateEmpID=1;
                    return updateEmpID;
                }
                else if (selection.empNameUpdate === "Louie Morris"){
                    let updateEmpID=2;
                    return updateEmpID;
                }
                else if (selection.empNameUpdate === "Rocky Scientist"){
                    let updateEmpID=3;
                    return updateEmpID;
                }        
                else if (selection.empNameUpdate === "Billie Gates"){
                    let updateEmpID=4;
                    return updateEmpID;
                }
                else if (selection.empNameUpdate === "Augie Meta"){
                    let updateEmpID=5;
                    return updateEmpID;
                }        
                else if (selection.empNameUpdate === "Aster Martinez"){
                    let updateEmpID=6;
                    return updateEmpID;
                }        
                else if (selection.empNameUpdate === "Patrice DuPont"){
                    let updateEmpID=7;
                    return updateEmpID;
                }
                else if (selection.empNameUpdate === "Alonoso Rubarb"){
                    let updateEmpID=8;
                    return updateEmpID;
                }                
                else {
                   let updateEmpID=9;
                   return updateEmpID;
                }               
            };

            function roleID(){
                if (selection.empRoleUpdate === "Industrial Engineer"){
                    let addRoleID=1;
                    return addRoleID;
                }
                else if (selection.empRoleUpdate === "Mechanical Engineer"){
                    let addRoleID=2;
                    return addRoleID;
                }
                else if (selection.empRoleUpdate === "Aerospace Engineer"){
                    let addRoleID=3;
                    return addRoleID;
                }        
                else if (selection.empRoleUpdate === "Associate Programmer"){
                    let addRoleID=4;
                    return addRoleID;
                }
                else if (selection.empRoleUpdate === "Computer Vision Developer"){
                    let addRoleID=5;
                    return addRoleID;
                }        
                else if (selection.empRoleUpdate === "Sr. IE & Inno Manager"){
                    let addRoleID=6;
                    return addRoleID;
                }        
                else if (selection.empRoleUpdate === "Operations Manager"){
                    let addRoleID=7;
                    return addRoleID;
                }
                else {
                   let addRoleID=8;
                   return addRoleID;
                }};
            
            let updateEmpID = getEmpID();
            
            let addRoleID = roleID();

            db.query(
                `UPDATE employee SET ? WHERE ?`,
                [
                    {
                        role_id: addRoleID
                    },
                    {
                        id: updateEmpID
                    }
                ],
            )
            console.log("${empNameUpdate}")
            console.log("Successfully updated employee role.");
            getEmployee();
            userInput();
                 
        })    
};

userInput();
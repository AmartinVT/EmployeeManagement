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
    database: 'MartinMacAir',
    multipleStatements: true
    },
    console.log("Connection successful!!!")
    );
// Server interactions

// GET

// POST
const inquirer = require('inquirer');
const { getConnection } = require('./db');

// Function to manage employee operations
function manageEmployees() {
return inquirer
.prompt([
{
type: 'list',
name: 'action',
message: 'What would you like to do with employees?',
        choices: [
        'View all employees',
        'Add an employee',
        'Update an employee',
        'Delete an employee',
        'Go back',
        ],
    },
    ])
    .then((answer) => {
    switch (answer.action) {
        case 'View all employees':
        return viewAllEmployees();
        case 'Add an employee':
        return addEmployee();
        case 'Update an employee':
        return updateEmployee();
        case 'Delete an employee':
        return deleteEmployee();
        case 'Go back':
        return Promise.resolve();
    }
    })
    .catch((error) => {
    console.log('An error occurred:', error);
    });
}

// Function to view all employees
function viewAllEmployees() {
return getConnection()
    .then((connection) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM employee', (error, results) => {
        connection.release();

        if (error) {
            reject(error);
        } else {
            console.table(results);
            resolve();
        }
        });
    });
    })
    .catch((error) => {
    console.log('An error occurred:', error);
    });
}

// Function to add an employee
function addEmployee() {
return inquirer
    .prompt([
    {
        type: 'input',
        name: 'first_name',
        message: "Enter the employee's first name:",
    },
    {
        type: 'input',
        name: 'last_name',
        message: "Enter the employee's last name:",
    },
    {
        type: 'input',
        name: 'role_id',
        message: "Enter the employee's role ID:",
    },
    {
        type: 'input',
        name: 'manager_id',
        message: "Enter the employee's manager ID:",
    },
    ])
    .then((answers) => {
    return getConnection().then((connection) => {
        return new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO employee SET ?',
            {
            first_name: answers.first_name,
            last_name: answers.last_name,
            role_id: answers.role_id,
            manager_id: answers.manager_id,
            },
            (error) => {
            connection.release();

            if (error) {
                reject(error);
            } else {
                console.log('Employee added successfully!');
                resolve();
            }
            }
        );
        });
    });
    })
    .catch((error) => {
    console.log('An error occurred:', error);
    });
}

// Function to update an employee
function updateEmployee() {
  // TODO: Implement logic to update an employee
}

// Function to delete an employee
function deleteEmployee() {
  // TODO: Implement logic to delete an employee
}

module.exports = {
manageEmployees,
};


// Note to self - Remember to replace the database query placeholders 
// (SELECT * FROM employee, INSERT INTO employee SET ?, etc.) with the appropriate queries for your database schema.
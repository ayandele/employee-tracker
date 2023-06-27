const inquirer = require('inquirer');
const { getConnection } = require('./db');

// Function to manage department operations
function manageDepartments() {
return inquirer
    .prompt([
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do with departments?',
        choices: [
        'View all departments',
        'Add a department',
        'Update a department',
        'Delete a department',
        'Go back',
        ],
    },
    ])
    .then((answer) => {
    switch (answer.action) {
        case 'View all departments':
        return viewAllDepartments();
        case 'Add a department':
        return addDepartment();
        case 'Update a department':
        return updateDepartment();
        case 'Delete a department':
        return deleteDepartment();
        case 'Go back':
        return Promise.resolve();
    }
    })
    .catch((error) => {
    console.log('An error occurred:', error);
    });
}

// Function to view all departments
function viewAllDepartments() {
return getConnection()
    .then((connection) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM department', (error, results) => {
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

// Function to add a department
function addDepartment() {
return inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter the department name:',
    },
    ])
    .then((answers) => {
    return getConnection().then((connection) => {
        return new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO department SET ?',
            { name: answers.name },
            (error) => {
            connection.release();

            if (error) {
                reject(error);
            } else {
                console.log('Department added successfully!');
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

// Function to update a department
function updateDepartment() {
  // TODO: Implement logic to update a department
}

// Function to delete a department
function deleteDepartment() {
  // TODO: Implement logic to delete a department
}

module.exports = {
manageDepartments,
};

// Note to self - replace the database query placeholders 
// (SELECT * FROM department, INSERT INTO department SET ?, etc.) with the appropriate queries for your database schema.
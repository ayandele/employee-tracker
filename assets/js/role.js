const inquirer = require('inquirer');
const { getConnection } = require('./db');

// Function to manage role operations
function manageRoles() {
return inquirer
    .prompt([
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do with roles?',
        choices: [
        'View all roles',
        'Add a role',
        'Update a role',
        'Delete a role',
        'Go back',
        ],
    },
    ])
    .then((answer) => {
    switch (answer.action) {
        case 'View all roles':
        return viewAllRoles();
        case 'Add a role':
        return addRole();
        case 'Update a role':
        return updateRole();
        case 'Delete a role':
        return deleteRole();
        case 'Go back':
        return Promise.resolve();
    }
    })
    .catch((error) => {
    console.log('An error occurred:', error);
    });
}

// Function to view all roles
function viewAllRoles() {
return getConnection()
    .then((connection) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM role', (error, results) => {
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

// Function to add a role
function addRole() {
return getConnection()
    .then((connection) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM department', (error, results) => {
        if (error) {
            connection.release();
            reject(error);
            return;
        }

        const departmentChoices = results.map((department) => ({
            name: department.name,
            value: department.id,
        }));

        inquirer
            .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the role title:',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the role salary:',
            },
            {
                type: 'list',
                name: 'departmentId',
                message: 'Select the department:',
                choices: departmentChoices,
            },
            ])
            .then((answers) => {
            connection.query(
                'INSERT INTO role SET ?',
                {
                title: answers.title,
                salary: answers.salary,
                department_id: answers.departmentId,
                },
                (error) => {
                connection.release();

                if (error) {
                    reject(error);
                } else {
                    console.log('Role added successfully!');
                    resolve();
                }
                }
            );
            });
        });
    });
    })
    .catch((error) => {
    console.log('An error occurred:', error);
    });
}

// Function to update a role
function updateRole() {
  // TODO: Implement logic to update a role
}

// Function to delete a role
function deleteRole() {
  // TODO: Implement logic to delete a role
}

module.exports = {
manageRoles,
};

// Not to self - Remember to replace the database query placeholders 
// (SELECT * FROM role, INSERT INTO role SET ?, etc.) with the appropriate queries for your database schema.
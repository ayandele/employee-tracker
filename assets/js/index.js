// Import required modules and files
const inquirer = require('inquirer');
const { getConnection } = require('./db');
const { manageEmployees } = require('./employee');
const { manageDepartments } = require('./department');
const { manageRoles } = require('./role');

// Function to start the command-line interface
function startApp() {
  // Prompt the user to choose an action
inquirer
    .prompt([
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
        'Manage Employees',
        'Manage Departments',
        'Manage Roles',
        'Exit',
        ],
    },
    ])
    .then((answer) => {
      // Call the appropriate function based on user's choice
    switch (answer.action) {
        case 'Manage Employees':
        manageEmployees().then(() => startApp());
        break;
        case 'Manage Departments':
        manageDepartments().then(() => startApp());
        break;
        case 'Manage Roles':
        manageRoles().then(() => startApp());
        break;
        case 'Exit':
        console.log('Goodbye!');
        process.exit();
    }
    })
    .catch((error) => {
    console.log('An error occurred:', error);
    });
}

// Start the application
getConnection()
.then(() => {
    console.log('Connected to the database!');
    startApp();
})
.catch((error) => {
    console.log('Error connecting to the database:', error);
});

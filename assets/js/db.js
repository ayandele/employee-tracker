// Import required modules
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
host: 'localhost',
port: '3306',
user: 'your_username',
password: 'your_password',
database: 'your_database',
connectionLimit: 10, // Adjust the limit as needed
});

// Function to get a database connection from the pool
function getConnection() {
return new Promise((resolve, reject) => {
pool.getConnection((error, connection) => {
if (error) {
reject(error);
} else {
resolve(connection);
}
});
});
}

// Export the getConnection function
module.exports = {
getConnection,
};

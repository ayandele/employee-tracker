// Function to format employee data
function formatEmployee(employee) {
return `ID: ${employee.id}
Name: ${employee.first_name} ${employee.last_name}
Role: ${employee.role}
Department: ${employee.department}
Manager: ${employee.manager}`;
}

// Function to format department data
function formatDepartment(department) {
return `ID: ${department.id}
Name: ${department.name}`;
}

// Function to format role data
function formatRole(role) {
return `ID: ${role.id}
Title: ${role.title}
Salary: ${role.salary}
Department: ${role.department}`;
}

// Export the formatting functions
module.exports = {
formatEmployee,
formatDepartment,
formatRole,
};

-- Create department table
CREATE TABLE department (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30) NOT NULL
);

-- Create role table
CREATE TABLE role (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL(10, 2) NOT NULL,
department_id INT,
FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

-- Create employee table
CREATE TABLE employee (
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT,
manager_id INT,
FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL,
FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

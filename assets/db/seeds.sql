-- Insert sample departments
INSERT INTO department (name) VALUES
('Sales'),
('Finance'),
('Human Resources'),
('Marketing');

-- Insert sample roles
INSERT INTO role (title, salary, department_id) VALUES
('Sales Manager', 80000.00, 1),
('Sales Representative', 50000.00, 1),
('Accountant', 60000.00, 2),
('HR Manager', 70000.00, 3),
('Marketing Specialist', 55000.00, 4);

-- Insert sample employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Michael', 'Johnson', 3, 1),
('Emily', 'Williams', 4, 3),
('David', 'Brown', 5, 4);

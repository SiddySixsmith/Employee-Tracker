DROP DATABASE IF EXISTS Employee_tracker_db;
CREATE DATABASE Employee_tracker_db;

USE Employee_tracker_db;

CREATE TABLE department (
    id INT  AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE CASCADE,
    FOREIGN KEY (manager_id)
    REFERENCES employee (id)
);

ALTER TABLE employee 
ADD CONSTRAINT 'employee_role'
FOREIGN KEY (role_id)
REFERENCES role(id)
ON DELETE CASCADE
ON UPDATE NO ACTION,
ADD CONSTRAINT 'manager_id'
FOREIGN KEY (manager_id)
REFERENCES employee (id)
ON DELETE RESTRICT
ON UPDATE NO ACTION;
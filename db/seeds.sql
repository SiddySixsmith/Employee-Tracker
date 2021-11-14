INSERT INTO department (id, name)
VALUE (001, "Mock Department"),
      (002, "Mock Department design");



INSERT INTO role (id, title, salary, department_id)
VALUE (001, "Manager Mock", 80000, 001),
      (002, "Designer Mock", 80000, 002);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE (001, "Daniel", "Sixmith", 001, 001),
      (002, "Pan", "Tan", 002, 001);

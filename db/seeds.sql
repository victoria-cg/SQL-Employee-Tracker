INSERT INTO department (id, name)
VALUES (1, 'accounting'),
       (2, "sales");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, accountant, 50000, 1),
       (2, salesman, 100000, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, Bob, Smith, 1, null),
       (2, Jane, Jones, 2, 1); 
   
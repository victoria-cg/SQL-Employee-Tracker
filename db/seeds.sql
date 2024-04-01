INSERT INTO department (name)
VALUES ('accounting'),
       ('sales'),
       ('human resources');

INSERT INTO role (title, salary, department_id)
VALUES ('accountant', 50000, 1),
       ('salesman', 100000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Bob', 'Smith', 1, null),
       ('Jane', 'Jones', 2, 1); 
   
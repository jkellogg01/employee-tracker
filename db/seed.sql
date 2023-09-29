INSERT INTO department(name)
VALUES  ("Legal"),
        ("Finance"),
        ("Sales"),
        ("Engineering");

INSERT INTO role(title, salary, department_id)
VALUES  ("Lawyer", 190000, 1),
        ("General Counsel", 250000, 1),
        ("Accountant", 125000, 2),
        ("Account Manager", 160000, 2),
        ("Software Engineer", 120000, 4),
        ("Lead Engineer", 150000, 4),
        ("Salesperson", 80000, 3),
        ("Sales Lead", 120000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe", 8, NULL),
        ("Mike", "Chan", 7, 1),
        ("Ashley", "Rodriguez", 6, NULL),
        ("Kevin", "Tupik", 5, 3),
        ("Kumal", "Singh", 4, NULL),
        ("Malia", "Brown", 3, 5),
        ("Sarah", "Lourd", 2, NULL),
        ("Tom", "Allen", 1, 7);
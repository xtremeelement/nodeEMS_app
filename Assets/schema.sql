drop database if EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

create table employee (
	employee_id int primary key not null auto_increment,
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    manager_id int,
    foreign key (role_id) REFERENCES role(role_id),
    foreign key (manager_id) REFERENCES manager(manager_id)
);

create table role (
	role_id int primary key not null AUTO_INCREMENT,
	title varchar(30),
    salary decimal(10,2),
    department_id int,
    foreign key (department_id) REFERENCES department(department_id)
);

create table department(
	department_id INT primary key not null AUTO_INCREMENT,
	name varchar(30)
);

create table manager (
	manager_id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
	first_name varchar(30),
    last_name varchar(30)
);
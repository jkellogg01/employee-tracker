const inquirer = require("inquirer");
// const connect = require("./config/connection.js");
const mysql = require("mysql2/promise");
// const Queries = require("./db/queries");
require("dotenv").config();

const mainMenu = [
  "View all departments",
  "View all roles",
  "View all employees",
  new inquirer.Separator(),
  "Add a department",
  "Add a role",
  "Add an employee",
  new inquirer.Separator(),
  "Update employee role",
  new inquirer.Separator(),
  "Quit",
];

main();

async function main() {
  const db = await mysql.createConnection({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });
  let active = true;
  while (active) {
    const response = await inquirer.prompt([
      {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        loop: false,
        choices: mainMenu,
      },
    ]);
    switch (response.action) {
      case "View all departments":
        db.viewDepartments();
        break;
      case "View all roles":
        db.viewRoles();
        break;
      case "View all employees":
        db.viewEmployees();
        break;
      case "Add a department":
        db.addDepartment();
        break;
      case "Add a role":
        db.addRole();
        break;
      case "Add an employee":
        db.addEmployee();
        break;
      case "Update employee role":
        db.updateEmployeeRole();
        break;
      case "Quit":
      default:
        active = false;
        break;
    }
  }
  process.exit();
}

async function viewDepartments() {
  const departments = await this.database.query(`SELECT * FROM departments`);
  console.table(departments);
}
async function viewRoles() {
  console.log("This doesn't do anything yet!");
}
async function viewEmployees() {
  console.log("This doesn't do anything yet!");
}
async function addDepartment() {
  console.log("This doesn't do anything yet!");
}
async function addRole() {
  console.log("This doesn't do anything yet!");
}
async function addEmployee() {
  console.log("This doesn't do anything yet!");
}
async function updateEmployeeRole() {
  console.log("This doesn't do anything yet!");
}

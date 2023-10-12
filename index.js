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
  while (true) {
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
        await viewDepartments(db);
        break;
      case "View all roles":
        await viewRoles(db);
        break;
      case "View all employees":
        await viewEmployees(db);
        break;
      case "Add a department":
        await addDepartment(db);
        break;
      case "Add a role":
        await addRole(db);
        break;
      case "Add an employee":
        await addEmployee(db);
        break;
      case "Update employee role":
        await updateEmployeeRole(db);
        break;
      case "Quit":
      default:
        process.exit(0);
    }
    const promptContinue = await inquirer.prompt([
      {
        name: "continue",
        type: "confirm",
        message: "continue?",
        default: true,
      },
    ]);
    if (!promptContinue.continue) process.exit(0);
  }
}

async function viewDepartments(db) {
  const data = await db.query(`SELECT * FROM departments`);
  console.table(data[0]);
}
async function viewRoles(db) {
  const data = await db.query(`SELECT * FROM roles`);
  console.table(data[0]);
}
async function viewEmployees(db) {
  const data = await db.query(`SELECT * FROM employees`);
  console.table(data[0]);
}
async function addDepartment(db) {
  console.log("This doesn't do anything yet!");
}
async function addRole(db) {
  console.log("This doesn't do anything yet!");
}
async function addEmployee(db) {
  console.log("This doesn't do anything yet!");
}
async function updateEmployeeRole(db) {
  console.log("This doesn't do anything yet!");
}

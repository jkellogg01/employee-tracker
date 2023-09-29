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
  mainPrompt(db);
  // while (active) {
  //   const response = await inquirer.prompt([
  //     {
  //       name: "action",
  //       type: "list",
  //       message: "What would you like to do?",
  //       loop: false,
  //       choices: mainMenu,
  //     },
  //   ]);
  //   switch (response.action) {
  //     case "View all departments":
  //       viewDepartments(db);
  //       break;
  //     case "View all roles":
  //       viewRoles(db);
  //       break;
  //     case "View all employees":
  //       viewEmployees(db);
  //       break;
  //     case "Add a department":
  //       addDepartment(db);
  //       break;
  //     case "Add a role":
  //       addRole(db);
  //       break;
  //     case "Add an employee":
  //       addEmployee(db);
  //       break;
  //     case "Update employee role":
  //       updateEmployeeRole(db);
  //       break;
  //     case "Quit":
  //     default:
  //       active = false;
  //       break;
  //   }
  // }
  // process.exit();
}

async function mainPrompt(db) {
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
      viewDepartments(db);
      break;
    case "View all roles":
      viewRoles(db);
      break;
    case "View all employees":
      viewEmployees(db);
      break;
    case "Add a department":
      addDepartment(db);
      break;
    case "Add a role":
      addRole(db);
      break;
    case "Add an employee":
      addEmployee(db);
      break;
    case "Update employee role":
      updateEmployeeRole(db);
      break;
    case "Quit":
    default:
      active = false;
      break;
  }
  process.exit();
}

async function viewDepartments(db) {
  const departments = await db.query(`SELECT * FROM departments`);
  console.log("<- I'm with stupid");
  console.table(departments);
  mainPrompt(db);
}
async function viewRoles(db) {
  console.log("This doesn't do anything yet!");
}
async function viewEmployees(db) {
  console.log("This doesn't do anything yet!");
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

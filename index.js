const inquirer = require("inquirer");
const connect = require("./config/connections.js");
const Queries = require("./db/queries");
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
  const db = new Queries(await connect());
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

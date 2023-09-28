const inquirer = require("inquirer");
const mysql = require("mysql2/promise");
require("dotenv").config();

const mainMenu = ["Quit"];

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
        choices: mainMenu,
      },
    ]);
    switch (response.action) {
      case "Quit":
        active = false;
        break;
    }
  }
  process.exit();
}

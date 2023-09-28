const mysql = require("mysql2/promise");
require("dotenv").config();

class Queries {
  constructor(database) {
    this.database = database;
  }
  async viewDepartments() {
    console.log("This doesn't do anything yet!");
  }
  async viewRoles() {
    console.log("This doesn't do anything yet!");
  }
  async viewEmployees() {
    console.log("This doesn't do anything yet!");
  }
  async addDepartment() {
    console.log("This doesn't do anything yet!");
  }
  async addRole() {
    console.log("This doesn't do anything yet!");
  }
  async addEmployee() {
    console.log("This doesn't do anything yet!");
  }
  async updateEmployeeRole() {
    console.log("This doesn't do anything yet!");
  }
}

module.exports = Queries;

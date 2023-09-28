const mysql = require("mysql2/promise");
require("dotenv").config();

class Connection {
  constructor(connectionInfo) {
    const { database, user, password } = connectionInfo;
    this.database = database;
    this.user = user;
    this.password = password;
  }
  async connect() {
    this.db = await mysql.createConnection(this);
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

module.exports = Connection;

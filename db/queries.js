const mysql = require("mysql2/promise");
require("dotenv").config();

class Connection {
  constructor(connectionInfo) {
    // const db = await mysql.createConnection({
    //   database: process.env.DB_NAME,
    //   user: process.env.DB_USER,
    //   password: process.env.DB_PASS,
    // });
    const { database, user, password } = connectionInfo;
    this.database = database;
    this.user = user;
    this.password = password;
  }
  async connect() {
    this.db = await mysql.createConnection(this);
  }
}

module.exports = Connection;

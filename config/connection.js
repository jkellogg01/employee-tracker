const mysql = require("mysql2/promise");

module.exports = async () => {
  mysql.createConnection({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });
};

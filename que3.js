const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "my_database",
});

const insertData = async (data) => {
  const existingCustomer = await connection.query(
    `SELECT * FROM customers WHERE email = '${data.email}'`
  );

  if (existingCustomer.length > 0) {
    await connection.query(
      `UPDATE customers SET name = '${data.name}' WHERE email = '${data.email}'`
    );
  } else {
    await connection.query(
      `INSERT INTO customers (email, name) VALUES ('${data.email}', '${data.name}')`
    );
  }
};

module.exports = insertData;

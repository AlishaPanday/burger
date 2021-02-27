// Set up MySQL connection.
const mysql = require('mysql');

// let connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConenction(process.env.JAWSDB_URL)
// }
// else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'root',
//     database: 'burger_db',
//   });
// }
const dsn = "mysql://oivbg2qpjfaeh5x6:hn9d9fm5cjvljlec@l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/gd2y01knsble1yq9"
const connection = mysql.createConnection({
  host:"l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user:"oivbg2qpjfaeh5x6",
  password:"hn9d9fm5cjvljlec",
  database:"gd2y01knsble1yq9",
});


// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;

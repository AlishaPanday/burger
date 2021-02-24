//Set up mysql connection

const mysql = require('mysql');


//Make connection

const connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

//Export connection for ORM to use
module.exports = connection;
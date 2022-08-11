var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "work_manager",
});

connection.connect(function (err) {
  if (err) console.log("Connection error!!");

});

module.exports = connection;
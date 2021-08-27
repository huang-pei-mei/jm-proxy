var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "student",
database: "menagerie"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  let version = 1;
  for (let i = 1; i < 99; i++) {
    if (version === 1) {
      version = 2;
    } else {
      version = 1;
    }
    var sql = "INSERT INTO mappings (page_id, page_layout) VALUES (?, ?)";
    con.query(sql, [i, version], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  }
});
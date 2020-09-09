"use strict";

var response = require("./res");
var conn = require("./koneksi");

exports.index = function (req, res) {
  response.ok("rest", res);
};

// menampil kan semua data mahasiswa
exports.tampilsemuasiswa = function (req, res) {
  conn.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
    if (error) {
      conn.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

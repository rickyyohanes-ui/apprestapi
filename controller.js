"use strict";

var response = require("./res");
var conn = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi Rest Api ku Berjalan");
};

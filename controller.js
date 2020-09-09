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

// menampil kan semua data mahasiswa berdasarkan ID
exports.tampildataberdasarkanid = function (req, res) {
  let id = req.params.id;
  conn.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id], function (
    error,
    rows,
    fields
  ) {
    if (error) {
      conn.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// menambahkan data baru
exports.tambahMahasiswa = function (req, res) {
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  conn.query(
    "INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?) ",
    [nim, nama, jurusan],
    function (error, rows, fields) {
      if (error) {
        conn.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data", res);
      }
    }
  );
};

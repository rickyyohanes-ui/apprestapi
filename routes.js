"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);
  app.route("/tampil").get(jsonku.tampilsemuasiswa);
  app.route("/tampil/:id").get(jsonku.tampildataberdasarkanid);
  app.route("/tambahData").post(jsonku.tambahMahasiswa);
  app.route("/ubah").put(jsonku.ubahMahasiswa);
  app.route("/hapus").delete(jsonku.hapusData);
};

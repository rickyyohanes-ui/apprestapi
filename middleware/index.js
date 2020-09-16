const express = require('express');
var auth =  require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');


// daftar menu registerasi
router.post('/api/v1/register', auth.register);
router.post('/api/v1/login', auth.login);

// alamat yang perlu di otorisasi
router.get('/api/v1/halamanrahasia', verifikasi(2), auth.halamanrahasia);

module.exports = router;
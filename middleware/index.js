const express = require('express');
var auth =  require('./auth');
var router = express.Router();

// daftar menu registerasi
router.post('/api/v1/register', auth.register);
router.post('/api/v1/login', auth.login);

module.exports = router;
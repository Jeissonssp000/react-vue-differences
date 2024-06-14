const express = require('express');
const router = express.Router();
const unzipController = require('../controllers/unzipController');

router.post('/upload', unzipController.fileUploadAndUnzip);

module.exports = router;
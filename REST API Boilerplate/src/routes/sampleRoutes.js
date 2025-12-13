const express = require('express');
const router = express.Router();
const { getWeather, getCryptoPrice } = require('../controllers/sampleController');

// Weather endpoint
router.get('/weather', getWeather);

// Crypto endpoint
router.get('/crypto', getCryptoPrice);

module.exports = router;

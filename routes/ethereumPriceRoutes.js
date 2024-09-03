const express = require('express');
const PriceController = require('../controllers/ethereumPriceController');

const router = express.Router();

router
    .get('/eth', PriceController.getLatestPrice);

module.exports = router;
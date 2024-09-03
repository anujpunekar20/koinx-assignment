const express = require('express');
const TransactionsController = require('../controllers/transactionController');

const router = express.Router();

router
    .get('/:address', TransactionsController.getTransactions);

module.exports = router;
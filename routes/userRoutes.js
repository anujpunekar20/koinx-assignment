const express = require('express');
const { getUserExpensesAndEtherPrice } = require('../controllers/userController');

const router = express.Router();

router.get('/:address', getUserExpensesAndEtherPrice);

module.exports = router;
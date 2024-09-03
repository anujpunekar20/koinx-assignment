const express = require('express');
const connectDB = require('./config/database');
const transactionRoutes = require('./routes/transactionRoutes');
const ethereumPriceRoutes = require('./routes/ethereumPriceRoutes');
const userRoutes = require('./routes/userRoutes');
const {startEthereumPriceFetcher} = require('./services/ethereumPriceService');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(morgan('tiny'));
app.use(express.json());

app.use('/api/transactions', transactionRoutes);
app.use('/api/price', ethereumPriceRoutes);
app.use('/api/balance', userRoutes);

startEthereumPriceFetcher();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
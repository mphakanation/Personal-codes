// src/app.js
const express = require('express');
const sampleRoutes = require('./routes/sampleRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

// Routes
app.use('/api/sample', sampleRoutes);

// Error handler
app.use(errorHandler);

module.exports = app;

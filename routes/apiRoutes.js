const express = require('express');
const router = express.Router();

// Import modular routes
const userRoutes = require('./user');
const parameterRoutes = require('./parameters');
const polygonRoutes = require('./polygon');

// Combine modular routes
router.use(userRoutes);
router.use(parameterRoutes);
router.use(polygonRoutes);

module.exports = router;

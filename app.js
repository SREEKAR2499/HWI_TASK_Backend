const express = require('express');
const app = express();
app.use(express.json());

// Import routes
const userRoutes = require('./routes/users');
const parameterRoutes = require('./routes/parameters');
const polygonRoutes = require('./routes/polygons');

// Use routes
app.use('/api', userRoutes);
app.use('/api', parameterRoutes);
app.use('/api', polygonRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

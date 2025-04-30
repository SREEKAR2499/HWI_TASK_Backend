const app = express();
app.use(express.json());

const allowedOrigins = [
"https://h-engine.vercel.app", // PRODUCTION FRONTEND
"https://h-engine-dev.vercel.app", // PRODUCTION DEV FRONTEND
"http://localhost:3000" // LOCAL DEVELOPMENT
];

const corsOptions = {
origin: "*",
methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
allowedHeaders: ["Content-Type", "Authorization", 'user_id', "ngrok-skip-browser-warning"],
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));



const express = require('express');

app.use(express.json());

// Users
app.get('/api/get-all-users', async (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]);
});

app.post('/api/login', async (req, res) => {
  res.json({ message: 'Login successful', token: 'mock-token-123' });
});

app.post('/api/logout', async (req, res) => {
  res.json({ message: 'Logout successful' });
});

app.post('/api/get-user-email-and-status', async (req, res) => {
  res.json({ email: 'user@example.com', status: 'active' });
});

app.post('/api/add-user', async (req, res) => {
  res.json({ message: 'User added successfully', userId: 123 });
});

app.put('/api/change-password', async (req, res) => {
  res.json({ message: 'Password changed successfully' });
});

app.put('/api/update-user-profile', async (req, res) => {
  res.json({ message: 'User profile updated successfully' });
});

app.put('/api/update-user', async (req, res) => {
  res.json({ message: 'User updated successfully' });
});

app.put('/api/delete-selected-users', async (req, res) => {
  res.json({ message: 'Selected users deleted successfully' });
});

app.post('/api/send-password-reset-link', async (req, res) => {
  res.json({ message: 'Password reset link sent to email' });
});

// Parameters
app.get('/api/get-all-parameters', async (req, res) => {
  res.json([{ id: 1, name: 'Param1' }, { id: 2, name: 'Param2' }]);
});

app.post('/api/get-polygon-parameters', async (req, res) => {
  res.json({ polygonId: 1, parameters: ['Height', 'Width'] });
});

app.post('/api/add-parameter', async (req, res) => {
  res.json({ message: 'Parameter added successfully', parameterId: 456 });
});

app.put('/api/update-parameter', async (req, res) => {
  res.json({ message: 'Parameter updated successfully' });
});

app.delete('/api/delete-selected-parameters', async (req, res) => {
  res.json({ message: 'Selected parameters deleted successfully' });
});

app.get('/api/get-unique-values-for-string-parameters', async (req, res) => {
  res.json({ values: ['Value1', 'Value2', 'Value3'] });
});

// Polygons
app.get('/api/get-all-polygons', async (req, res) => {
  res.json([{ id: 1, name: 'Polygon A' }, { id: 2, name: 'Polygon B' }]);
});

app.post('/api/get-polygons-for-user', async (req, res) => {
  res.json({ userId: 1, polygons: ['Polygon A', 'Polygon B'] });
});

app.post('/api/add-polygon', async (req, res) => {
  res.json({ message: 'Polygon added successfully', polygonId: 789 });
});

app.put('/api/update-polygon', async (req, res) => {
  res.json({ message: 'Polygon updated successfully' });
});

app.delete('/api/delete-selected-polygons', async (req, res) => {
  res.json({ message: 'Selected polygons deleted successfully' });
});

app.get('/api/polygons', async (req, res) => {
  res.json([{ id: 1, type: 'Polygon', name: 'Test Polygon' }]);
});

app.post('/api/update-polygon-access', async (req, res) => {
  res.json({ message: 'Polygon access updated' });
});

app.post('/api/active-polygons', async (req, res) => {
  res.json([{ id: 1, name: 'Active Polygon A' }]);
});

// Server Start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

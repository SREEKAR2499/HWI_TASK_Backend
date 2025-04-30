const express = require('express');
const router = express.Router();

router.get('/get-all-users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login successful', token: 'mock-token' });
});

router.post('/logout', (req, res) => {
  res.json({ message: 'Logout successful' });
});

router.post('/get-user-email-and-status', (req, res) => {
  res.json({ email: 'user@example.com', status: 'active' });
});

router.post('/add-user', (req, res) => {
  res.json({ message: 'User added successfully', userId: 123 });
});

router.put('/change-password', (req, res) => {
  res.json({ message: 'Password changed successfully' });
});

router.put('/update-user-profile', (req, res) => {
  res.json({ message: 'User profile updated successfully' });
});

router.put('/update-user', (req, res) => {
  res.json({ message: 'User updated successfully' });
});

router.put('/delete-selected-users', (req, res) => {
  res.json({ message: 'Selected users deleted successfully' });
});

router.post('/send-password-reset-link', (req, res) => {
  res.json({ message: 'Password reset link sent' });
});

module.exports = router;

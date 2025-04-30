const express = require('express');
const router = express.Router();

router.get('/get-all-polygons', (req, res) => {
  res.json([{ id: 1, name: 'Polygon A' }]);
});

router.post('/get-polygons-for-user', (req, res) => {
  res.json({ userId: 1, polygons: ['Polygon A'] });
});

router.post('/add-polygon', (req, res) => {
  res.json({ message: 'Polygon added successfully' });
});

router.put('/update-polygon', (req, res) => {
  res.json({ message: 'Polygon updated successfully' });
});

router.delete('/delete-selected-polygons', (req, res) => {
  res.json({ message: 'Polygons deleted successfully' });
});

router.get('/polygons', (req, res) => {
  res.json([{ id: 1, name: 'Sample Polygon' }]);
});

router.post('/update-polygon-access', (req, res) => {
  res.json({ message: 'Access updated' });
});

router.post('/active-polygons', (req, res) => {
  res.json([{ id: 1, name: 'Active Polygon' }]);
});

module.exports = router;

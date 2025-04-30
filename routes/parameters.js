const express = require('express');
const router = express.Router();

router.get('/get-all-parameters', (req, res) => {
  res.json([{ id: 1, name: 'Param1' }]);
});

router.post('/get-polygon-parameters', (req, res) => {
  res.json({ polygonId: 1, parameters: ['Height', 'Width'] });
});

router.post('/add-parameter', (req, res) => {
  res.json({ message: 'Parameter added successfully' });
});

router.put('/update-parameter', (req, res) => {
  res.json({ message: 'Parameter updated successfully' });
});

router.delete('/delete-selected-parameters', (req, res) => {
  res.json({ message: 'Parameters deleted successfully' });
});

router.get('/get-unique-values-for-string-parameters', (req, res) => {
  res.json({ values: ['A', 'B', 'C'] });
});

module.exports = router;

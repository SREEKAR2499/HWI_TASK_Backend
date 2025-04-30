const dummyData = require('../data/dummyData');

// Controller function to handle requests
const getApiResponse = (req, res) => {
  const key = req.path.replace("/", "");
  console.log(`[${new Date().toISOString()}] Route Hit: ${req.path}`);

  if (dummyData[key]) {
    res.json(dummyData[key]);
  } else {
    res.status(404).json({ message: "No data found", status: "error" });
  }
};

module.exports = { getApiResponse };

const express = require('express');
const router = express.Router();

// Homepage route
router.get('/', (req, res) => {
  res.render('major-transfer-search');
});

module.exports = router;

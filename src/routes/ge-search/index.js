const express = require('express');
const router = express.Router();

// Homepage route
router.get('/', (req, res) => {
  res.render('ge-search');
});

module.exports = router;

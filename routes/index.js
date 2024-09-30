const express = require('express');
const router = express.Router();

// API routes
router.use('/api', require('./api'));

// Home page route
router.get('/', (req, res) => {
  res.render('index', { title: 'Whoops!' });
});

module.exports = router;

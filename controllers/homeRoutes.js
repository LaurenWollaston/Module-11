const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
      res.render('index.html');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/notes', async (req, res) => {
  try {
      res.render('notes.html');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

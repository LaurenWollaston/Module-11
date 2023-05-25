const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', async (req, res) => {
  try {
    res.sendFile(path.join(__dirname+'/../public/index.html'));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/notes', async (req, res) => {
  try {
      res.sendFile(path.join(__dirname+'/../public/notes.html'));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

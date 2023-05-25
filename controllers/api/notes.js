var fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Get notes
router.get('/notes/', async (req, res) => {
    const database = path.join(__dirname, '../../db/db.json');
    fs.readFile(database, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).end();
          return;
        }
        let db;
        try {
          db = JSON.parse(data);
        } catch (parseError) {
          console.error(parseError);
          res.status(500).end();
          return;
        }
        res.status(200).json(db);
      });
});


// Save note
router.post('/notes/', async (req, res) => {
    const database = path.join(__dirname, '../../db/db.json');
  
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).end();
        return;
      }
  
      let db;
      try {
        db = JSON.parse(data);
      } catch (parseError) {
        console.error(parseError);
        res.status(500).end();
        return;
      }

      if (req.body.text && req.body.title) {
        const newEntry = {
          title: req.body.title,
          text: req.body.text,
          id: uuidv4(),
        };
        db.push(newEntry);
  
        fs.writeFile(database, JSON.stringify(db), 'utf8', writeErr => {
          if (writeErr) {
            console.error(writeErr);
            res.status(500).end();
            return;
          }
  
          res.status(200).end();
        });
      } else {
        res.status(404).end();
      }
    });
  });

// Delete Note
router.delete('/notes/delte', async (req, res) => {
    const id = req.body.id;
    const database = path.join(__dirname, '../../db/db.json');
  
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).end();
        return;
      }
  
      let db;
      try {
        db = JSON.parse(data);
      } catch (parseError) {
        console.error(parseError);
        res.status(500).end();
        return;
      }
  
      const entryIndex = db.findIndex(entry => entry.id === id);
      if (entryIndex !== -1) {
        db.splice(entryIndex, 1);
  
        fs.writeFile(database, JSON.stringify(db), 'utf8', writeErr => {
          if (writeErr) {
            console.error(writeErr);
            res.status(500).end();
            return;
          }
  
          res.status(200).end();
        });
      } else {
        res.status(404).end();
      }
    });
  });
  
  module.exports = router;
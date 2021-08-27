const express = require('express');
const path = require('path');
const { db, Character } = require('./db');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
  });

app.get('/api/characters', async (req, res, next) => {
  try {
    const characters = await Character.findAll({
      attributes: ['id', 'name', 'bloodType', 'house']
    });
    res.json(characters);
  } catch(err) {
    next(err)
  }
})
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message || 'Internal server error');
  });

(async function startServer() {
    try {
      await db.sync();
      console.log('The database is synced!');
      app.listen(PORT, () =>
        console.log(`
  
          Listening on port ${PORT}
          http://localhost:3000/
  
        `)
      );
    } catch (err) {
      console.error(err);
    }
  })();
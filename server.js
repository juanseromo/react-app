const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const path = require('path');

const app = express()
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/fetch', async (req, res) => {
  res.send('Hello from the local to the web')
})

app.listen(process.env.PORT || 8000);
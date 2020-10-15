const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const path = require('path');

const app = express()
app.use(express.static(path.join(__dirname, 'build')));

const url = "https://api.github.com/repos/vercel/next.js"

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/fetch', cors(), async (req, res) => {
  return fetch(url)
  .then(response => response.json())
  .then(resp => {
    console.log(resp)
    const obj = {title: resp.title, img: resp.img}
    res.send( Object.entries(obj))
  })
  .catch(error => console.log('error', error));
})

app.listen(process.env.PORT || 8000);
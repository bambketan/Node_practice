const express = require('express');
const app = express();

app.get('', (req, res) => {
  res.send('Hello');
});

app.get('/help', (req, res) => {
  res.send('Oh HElp ');
});

app.get('/about', (req, res) => {
  res.send('ABOUT ');
});

app.get('/weather', (req, res) => {
  res.send('weather ');
});
app.listen(3000, () => {
  console.log('listing on port 3000');
});

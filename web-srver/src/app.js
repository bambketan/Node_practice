const express = require('express');
const app = express();

app.get('', (req, res) => {
  res.send('<h1>Used the h1 tag ie html tag</h1>');
});

app.get('/help', (req, res) => {
  res.send('Oh HElp ');
});

app.get('/about', (req, res) => {
  res.send('about');
});

app.get('/weather', (req, res) => {
  res.send({ name: 'KEtan', shop: 'Sagar' });
});
app.listen(3000, () => {
  console.log('listing on port 3000');
});

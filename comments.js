// Create web server
// 1. Create a web server that can listen to requests for /hello, and respond with some HTML that says <h1>Hello!</h1>
// 2. Add /hello/<name> so that the server responds with HTML that says <h1>Hello <name>!</h1>
// 3. Add /hello/<name>/<year> so that the server responds with HTML that says <h1>Hello <name> born in <year>!</h1>

const express = require('express');
const app = express();

app.get('/hello', function (req, res) {
  res.send('<h1>Hello!</h1>');
});

app.get('/hello/:name', function (req, res) {
  res.send(`<h1>Hello ${req.params.name}!</h1>`);
});

app.get('/hello/:name/:year', function (req, res) {
  res.send(`<h1>Hello ${req.params.name} born in ${req.params.year}!</h1>`);
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
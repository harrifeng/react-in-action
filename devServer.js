var express = require('express');
var path = require('path');

var app = express();
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5678, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:5678');
});

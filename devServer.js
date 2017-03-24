var express = require('express');

var app = express();
app.get('/', function(req, res) {
  res.send('Hello World')
})

app.listen(5678, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:5678');
});

const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const http = require('http');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.set('port', (process.env.PORT || 3001));
// respond with "hello world" when a GET request is made to the homepage
app.use('/', express.static(__dirname + '/User'));

app.route('/books')
.get(function (req, res) {
  MongoClient.connect('mongodb://localhost:27017/library', function (err, db) {
    if (err) throw err

    db.collection('books').find().toArray(function (err, result) {
      if (err) throw err
      res.send(result)
      console.log('Get on port 3000');
    })
  })

})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

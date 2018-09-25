const express = require('express');
const bodyParser = require('body-parser');
const getRepos = require('../helpers/github');
const dbStuff = require('../database/index');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  // console.log(req.body.term);
  // res.json(req.body.term);

  getRepos(req.body.term, function (body) {
    console.log('getRepos called in server/index.js');
    dbStuff.save(body);
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  dbStuff.findTopRepos(function(docs) {
    // TODO:
    // what to send in response?
    res.json(docs);
  });
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

module.exports = app;
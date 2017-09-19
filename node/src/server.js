'use strict';

const express = require('express');
const app = express();
let bodyParser = require('body-parser');
let ejs = require('ejs');
let pg = require('pg');

let votes = {
  sandwiches: 0,
  tacos: 0
};


let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.get('/', function (req, res) {
  res.render('pages/index', {
    votes: votes
  });
});


const PORT = 8888;
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
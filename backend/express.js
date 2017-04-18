/**
 * Created by leon_ on 4/16/2017.
 */
var express = require('express');
var axios = require('axios');
var pokedexAPI = require('pokedex-promise-v2');
var P = new pokedexAPI();


var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/pokemon/:name', function (req, res) {
  P.getPokemonByName(req.params.name)
    .then(function(response) {
      res.json({result: response});
    })
    .catch(function(error) {
      console.log(error);
      res.json({result:'Not Found'})
    });
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
});

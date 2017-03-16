var express = require('express')
var app = express()
var axios = require('axios')
var jsonfile = require('jsonfile')
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Credentials', true);
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
  next();
});

const BASE_URL = 'http://www.behance.net/v2'
//const API_KEY = 'TC4iMKLEasvhlXHID8WE4Wg7cLBNHPIH'
const API_KEY = 'dFPP4SSKThvd1avOMtwb4v8opsz8Ft78'
const client_id = '?client_id=' + API_KEY + '&per_page=25'

function endpointURL(endpoint) {
  return BASE_URL + endpoint + client_id
}

function writeFile(file, data) {
  jsonfile.writeFile(file, data, function (err) {
    if (err) console.error(err)
    else console.log('file written')
  })
}

function prettyPrint(json) {
  console.log(JSON.stringify(json, null, 4))
}

app.get('/user', function (req, res) {
  axios.get(endpointURL('/users/achen041bd2/projects'))
    .then(response => {
      res.send(response.data)
    })
    .catch(error => {
      console.log('error', error)
    })
})

app.get('/projects/:projectId', function (req, res) {
  axios.get(endpointURL('/projects/' + req.params.projectId))
    .then(response => {
      res.send(response.data)
    })
    .catch(error => {
      console.log('error', error)
    })
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001')
})

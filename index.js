var express = require('express')
var app = express()
var axios = require('axios')
var jsonfile = require('jsonfile')

var fileURL = './data.json'
var cachedData = require('./data.json')


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const BASE_URL = 'https://api.behance.net/v2'
const API_KEY = 'TC4iMKLEasvhlXHID8WE4Wg7cLBNHPIH'
const client_id = '?client_id=' + API_KEY

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
  prettyPrint(cachedData)
  res.send(cachedData)
  //axios.get(endpointURL('/users/achen041bd2/projects'))
    //.then(response => {
      //console.dir(response.data)
      //writeFile(fileURL, response.data)
      //res.send(response.data)
    //})
    //.catch(error => {
      //console.log('error', error)
    //})
})

app.get('/projects', function (req, res) {

})

app.listen(3001, function () {
  console.log('Example app listening on port 3001')
})

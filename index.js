var express = require('express')
var app = express()
var axios = require('axios')

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

app.get('/user', function (req, res) {
  axios.get(endpointURL('/users/achen041bd2/projects'))
    .then(response => {
      console.dir(response.data)
      res.send(response.data)
    })
    .catch(error => {
      console.log('error', error)
    })
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001')
})

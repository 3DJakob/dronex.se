var express = require('express')
var app = require('express')()
var http = require('http').Server(app)

app.use('/css', express.static('assets/css'))
app.use('/img', express.static('assets/img'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

http.listen(3200, function () {
  console.log('listening on *:3200')
})

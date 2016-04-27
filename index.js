var express = require('express')
var ejs = require('ejs')
var path = require('path')
var app = require('express')()

app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', ejs.renderFile)

app.use('/css', express.static('assets/css'))
app.use('/img', express.static('assets/img'))

app.get('/', function (req, res) {
  res.render('page_home.ejs', {
    page: 'home'
  })
})

app.get('/oss', function (req, res) {
  res.render('page_us.ejs', {
    page: 'us'
  })
})

app.listen(3200, function () {
  console.log('listening on *:3200')
})

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const admin = require('./routes/admin')
const public = require('./routes/public')

app.use(public)
app.use('/admin', admin)
app.get('*', (req, res) => {
	res.render('pages/public/404')
}) 

app.listen(3000, () => {
  console.log('Server Ready!!!!')
})

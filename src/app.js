const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const session = require('express-session')
const app = express()
require('dotenv').config()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const admin = require('./routes/admin')
const public = require('./routes/public')
const {
	APP_SECRET,
	APP_PORT,
	APP_SESS_NAME,
	APP_SESS_LIFETIME,
	APP_NODE_ENV,
} = process.env

const IN_PROD = APP_NODE_ENV === 'production'

// setting session
app.use(session({
	name:APP_SESS_NAME,
	resave: false,
	saveUninitialized: false,
	secret: APP_SECRET,
	cookie: {
		maxAge: parseInt(APP_SESS_LIFETIME),
		sameSite: true,
		secure: IN_PROD
	}
}))


app.use(public)
app.use('/admin', admin)
app.get('*', (req, res) => {
	res.render('pages/public/404')
}) 

app.listen(APP_PORT, () => {
  console.log('Server Ready!!!!')
})

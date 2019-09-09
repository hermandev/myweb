const express = require('express')
const router = express.Router()
// Database
const Users = require('../models/Users.js')



// DASHBOARD
router.get('/', async (req, res) => {
  res.render('pages/dashboard/index')
})
// END DASHBOARD


// POSTS
router.get('/posts', async (req, res) => {
  res.render('pages/dashboard/posts')
})
// END POSTS


// GALERY
router.get('/galery', async (req, res) => {
  res.render('pages/dashboard/galery')
})
// END GALERY


// ANALITYCS
router.get('/analitycs', async (req, res) => {
  res.render('pages/dashboard/analitycs')
})
// END ANALITYCS


// SHOP
router.get('/shop', async (req, res) => {
  res.render('pages/dashboard/shop')
})
// END SHOP


// COMMENTS
router.get('/comments', async (req, res) => {
  res.render('pages/dashboard/comments')
})
// END COMMENTS


// SETTINGS
router.get('/settings', async (req, res) => {
  res.render('pages/dashboard/settings')
})
// END SETTINGS


// REGISTER
router.get('/user/register', async (req, res) => {
  res.render('pages/dashboard/register')
})

router.post('/user/register', async (req, res) => {
  const data = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }
  res.render('pages/dashboard/register',{data: data})
})

// END REGISTER


// LOGIN
router.get('/login', async (req, res) => {
  res.render('pages/dashboard/login')
})

router.post('/login', async (req, res) => {
  res.render('pages/dashboard/login')
  res.json({
  	username: req.body.username,
  	password: req.body.password
  })
})
// END LOGIN

module.exports = router

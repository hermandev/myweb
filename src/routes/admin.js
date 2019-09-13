const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
// Database
const Users = require('../models/Users.js')



// DASHBOARD
router.get('/', async (req, res) => {
  const data = await Users.find()
  res.render('pages/dashboard/index', {data: data})
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
  res.render('pages/dashboard/register', {errors:""})
})

router.post('/user/register', async (req, res) => {
  try{
    const {username, email, password} = req.body
    const checkUser = await Users.findOne({
      email: email
    })

    const msg = []

    if(checkUser) {
      msg.push({error:"Email sudah terdaftar"})
      res.render('pages/dashboard/register', {errors:msg})
    } else {
      const hashPassword = await bcrypt.hash(password, 12)
      const addUSer = await Users({
        username:username,
        email:email,
        password: hashPassword,
        updateAt:new Date(),
        createAt: new Date() 
      }).save()
      if(!addUSer) {
        res.json({
          error: true,
          msg: "ada masalah saat mendaftar"
        })
      } else {
        res.redirect('/admin')
      }
    }
  } catch(err) {
    console.log(err)
  }

  
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

// LOGOUT
router.get('/logout', async (req, res) => {
  res.render('pages/dashboard/login')
})

module.exports = router

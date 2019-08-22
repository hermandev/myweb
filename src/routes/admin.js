const express = require('express')
const router = express.Router()



// DASHBOARD
router.get('/', (req, res) => {
  res.render('pages/dashboard/index')
})
// END DASHBOARD


// POSTS
router.get('/posts', (req, res) => {
  res.render('pages/dashboard/posts')
})
// END POSTS


// GALERY
router.get('/galery', (req, res) => {
  res.render('pages/dashboard/galery')
})
// END GALERY


// ANALITYCS
router.get('/analitycs', (req, res) => {
  res.render('pages/dashboard/analitycs')
})
// END ANALITYCS


// SHOP
router.get('/shop', (req, res) => {
  res.render('pages/dashboard/shop')
})
// END SHOP


// COMMENTS
router.get('/comments', (req, res) => {
  res.render('pages/dashboard/comments')
})
// END COMMENTS


// SETTINGS
router.get('/settings', (req, res) => {
  res.render('pages/dashboard/settings')
})
// END SETTINGS



module.exports = router
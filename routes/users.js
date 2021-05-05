const express = require('express');
const router = express.Router();

// Persist Data (seed db)
const users = [];

//'@Get =>/users'
router.get('/', (req,res) =>{
  res.render('users',{pageTitle: 'Users', collection: users})
})

//'@POST => /users'

router.post('/', (req,res) =>{
  users.push({name: req.body.name})
  res.redirect('/users')
})

exports.routes = router;
exports.users = users;
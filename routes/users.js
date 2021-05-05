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
  const {name} = req.body
  name && users.push({name})
  res.redirect('/users')
})

exports.routes = router;
exports.users = users;
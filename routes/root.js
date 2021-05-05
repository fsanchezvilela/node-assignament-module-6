const express = require('express');
const router = express.Router();

'@Get ROOT => /'
router.get('/', (req,res) =>{
  res.render('index',{pageTitle: 'Main Route'})
})

exports.routes = router;
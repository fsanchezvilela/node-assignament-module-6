const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./routes/users');
const rootRoutes = require('./routes/root')

//setting view engine
app.set('view engine', 'ejs');
app.set('views','views');

//set custom middleware body parsers and serving css
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

// need to set a routes
app.use('/',rootRoutes.routes);
app.use('/users', userRoutes.routes);

// Handle 404
app.use((req, res) =>{
  res.status(404).render('404', {pageTitle: 'Page not found'})
})

app.listen(3000,()=>{
  console.log('start server in port 3000')
})
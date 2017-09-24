// BASIC CONSTANTS
const express = require('express');
const path = require('path');
const app = express();
const PORT  = 8100;

// DEPENDENCY CONSTANTS
const bodyParser = require('body-parser');
// const session = require('express-session');

// GENERAL CONFIGURATION
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public/dist')));
app.use(bodyParser.json());
// app.use(session({secret: 'secretKey'}));

// MONGOOSE
require('./server/config/mongoose.js');

// ROUTES
const routes_setter = require('./server/config/routes.js')
routes_setter(app);

// THE IMPORTANT SERVER BIT
app.listen(PORT, ()=>{
  console.log('listening on port' + PORT);
});
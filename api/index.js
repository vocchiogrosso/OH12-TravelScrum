require('dotenv').config();
const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

//Create API + PORT
const api = new express();
const port = process.env.PORT || 3400;

// CORS middleware
const enableCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','*');
    res.header('Access-Control-Allow-Headers','*');
    next();
}
api.use(enableCrossDomain);

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

//Database Connection
const ConnectionString = require('./database/connect');
const Connection_String = ConnectionString.BuildConnectionString();
mongoose.connect(Connection_String,{ useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
console.log(ConnectionString.CheckConnectionState());
mongoose.connection.once('open', function(res) { 
  console.log(ConnectionString.CheckConnectionState());
  nextup();
});

function nextup(){
    // HOMEPAGE
    api.get('/',(req,res)=>{
        res.sendStatus(200);
    });
    
    // API AUTH ROUTES
    const router = require('./router/index');
    api.use('/',router);
    
    // Listen For Port
    api.listen(port, () => 
        console.log(chalk.green.inverse("http://localhost:"+port))
    );

}
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended:false}))

const mongoURI = 'mongodb+srv://sahan:Sa**1994@logreg-riqaf.mongodb.net/test?retryWrites=true'

mongoose    
    .connect(mongoURI, {useNewUrlParser:true})
    .then(() => console.log("MogoDB Connected"))
    .catch(err => console.log(err))

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port , function(){
    console.log("Server is running on port: " + port)
})
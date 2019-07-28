const express = require('express');
const port = process.env.PORT || 3030;
const mongoose = require('mongoose');
// const mongoUri = 'mongodb://localhost/sela';
const mongoUri = "mongodb://user:5password@ds255917.mlab.com:55917/heroku_jr334342";
const {static} = require('express');
const bodyParser = require('body-parser');
var generalRoute = require('./routes')

mongoose.connect(mongoUri, {useNewUrlParser: true})

const app = express();
app.use('/images', static('./uploads'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

if(process.env.NODE_ENV == "production"){
    app.use(express.static("./client/build"))
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', generalRoute)


app.listen(port, ()=>{console.log(`Application listening on port ${port}`)});
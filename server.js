const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const port = 7000;


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({secret :'secret', resave : false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session()); 



app.set("view engine","ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 
app.use(express.static('public'));
let db; 

MongoClient.connect("mongodb+srv://saunogq:dudwndi7@cluster0.xaury3g.mongodb.net/?retryWrites=true&w=majority",function(err,result){
    if(err) { return console.log(err); }
    db = result.db("buyeo");
    app.listen(port,function(){
        console.log("서버연결 성공");
    });

});


app.get("/",function(rer,res){
    res.render("index.ejs");
})
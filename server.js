var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require('body-parser')
var cons = require('consolidate');

var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
//var url = process.env.URL || "mongodb:localhost:8000";
var dbName = process.env.DBNAME || "blog";
var port = process.env.PORT || 8000;
var myDB = null;
app.engine('html', cons.pug);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');



var routes = require("./routes");

var generateData = require("./generateData.js")
MongoClient.connect("mongodb://localhost/blog", function (err, client) {
    if (err)
        throw err;

    app.client = client;
    app.db = client.db(dbName);
    // Si vous voulez generer un article automatiquement
//    app.db.collection("articles").insert({"titre": generateData.generateWord(8), "date": generateData.generateWord(8), "auteur": generateData.generateWord(20), "resume": generateData.generateWord(20), "article": generateData.generateWord(100), "like": "0"})
    console.log("Connecté à la base de données 'blog'");
    routes(app);




    app.listen(port, function () {
        console.log("now listening on http://localhost:" + port)
    });
    module.exports = app;




});



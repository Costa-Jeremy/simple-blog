
var MongoClient = require("mongodb").MongoClient;
var MongoObjectID = require("mongodb").ObjectID;

var bodyParser = require('body-parser');



module.exports = function (app) {
    app.get("/post/create", function (req, res) {
        res.render("postAjoutArticle");
    });
    app.get("/about", function (req, res) {
        res.render("about");
    });

    app.post("/post/create", function (req, res) {

        var nom = req.body.nom;
        var prenom = req.body.prenom;
        var titre = req.body.titre;
        var article = req.body.article;
        var dateobj = new Date();

        var resume = "Resume non disponible";
        if (article.length > 100)
            var resume = article.substr(0, 100);
        else
        if (article.length > 50)
            var resume = article.substr(0, 50);

        function pad(n) {
            return n < 10 ? "0" + n : n;
        }
        var date = pad(dateobj.getDate()) + "/" + pad(dateobj.getMonth() + 1) + "/" + dateobj.getFullYear();
        var objNew = {titre: titre, date: date, auteur: prenom + " " + nom, resume: resume, article: article, like: 0};

        MongoClient.connect("mongodb://localhost/blog", function (err, client) {

            myDB = client.db('blog');
            myDB.collection("articles").insert(objNew, null, function (error, results) {
                if (error)
                    throw error;

            });
        });

        res.redirect("/");
    });



    app.post("/post/addCom", function (req, res) {
        var id = req.body.id;
        var nom = req.body.nom;
        var prenom = req.body.prenom;
        var commentaire = req.body.commentaire;
        var dateobj = new Date();

        function pad(n) {
            return n < 10 ? "0" + n : n;
        }
        var date = pad(dateobj.getDate()) + "/" + pad(dateobj.getMonth() + 1) + "/" + dateobj.getFullYear();
        var objNew = {auteur: prenom + " " + nom, date: date, commentaire: commentaire, id: id};

        MongoClient.connect("mongodb://localhost/blog", function (err, client) {

            myDB = client.db('blog');
            myDB.collection("commentaire").insert(objNew, null, function (error, results) {
                if (error)
                    throw error;

            });
        });

        res.redirect("/post/" + id);
    });


    app.get("/post/:id", function (req, res) {
        var id = req.params.id;
        var objToFind = {_id: new MongoObjectID(id)};
        var article;
        MongoClient.connect("mongodb://localhost/blog", function (err, client) {
            var resultArray = [];
            myDB = client.db('blog');
            myDB.collection("articles").findOne(objToFind, function (error, result) {
                if (error)
                    throw error;

                article = result;

            });

            var query = {"id": id};

            var cursor = myDB.collection("commentaire").find(query);
            cursor.forEach(function (doc, err) {

                resultArray.push(doc);
            }, function ()
            {

                res.render("article", {article: article, commentaires: resultArray});

            });
        });


    });

    app.get("/postD/:id", function (req, res) {
        var id = req.params.id;
        var objToFind = {_id: new MongoObjectID(id)};
        MongoClient.connect("mongodb://localhost/blog", function (err, client) {

            myDB = client.db('blog');


            myDB.collection("articles").remove(objToFind, null, function (error, result) {
                if (error)
                    throw error;
            });
            var myquery = {id: id};
            myDB.collection("commentaire").deleteOne(myquery, function (err, obj) {
                if (err)
                    throw err;

            });

        });
        res.redirect("/");
    });


    app.get("/post/like/:id/:like", function (req, res) {
        var id = req.params.id;
        var like = parseInt(req.params.like);
        var likeb = like + 1;
        var objToFind = {_id: MongoObjectID(id)};
        MongoClient.connect("mongodb://localhost/blog", function (err, client) {
            console.log(likeb);
            myDB = client.db('blog');
            console.log(objToFind);
            myDB.collection('articles').update(objToFind, {$set: {'like': likeb}}, function (err, result) {

            });

            res.redirect("/");
        });
    });


}




 
var posts = require("./posts");
var MongoClient = require("mongodb").MongoClient;

module.exports = function(app) {

  app.get("/", function(req, res) {
      var resultArray =[];
      MongoClient.connect("mongodb://localhost/blog", function(err, client) {

 myDB=client.db('blog');
    var cursor = myDB.collection("articles").find();
      
        cursor.forEach(function(doc, err) {
         
            resultArray.push(doc);
        }, function ()
        {

            res.render("index", {articles : resultArray});
        
        });
        
       
    }); 
  
});
      
         
      

 
  
  // Register posts endpoint
  posts(app);
}

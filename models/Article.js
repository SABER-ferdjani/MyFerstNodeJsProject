const mongoose = require("mongoose");
const Schema = mongoose.Schema 
const articleSchema = newSchema({
    titel : String ,
    body : String ,
    number : Number 

})
 

const Article = mongoose.model("Article" , articleSchema)


module.exports = Article;


const mongoose = require("mongoose");
const Schema = mongoose.Schema ;
const articleSchema = new Schema({
    name : String ,
    age : String ,
    un : String 

});
 

const Article = mongoose.model("Article" , articleSchema);


module.exports = Article;


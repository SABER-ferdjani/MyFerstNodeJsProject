const express = require("express");

const app = express();

app.use(express.json());

const mongoose = require("mongoose");

const Article = require("./models/Article");

mongoose.connect("mongodb+srv://saburu:28032005@myferstdatabase.auruyz0.mongodb.net/?retryWrites=true&w=majority&appName=MyFerstDataBase")
.then(() => {
    console.log("connected successfully")
}).catch((error) => {
    console.log("have error in connect wheth data base" ,error);
});




app.use(express.static('public'));

app.get("/hello", (req,res) => {

    res.send("hello!");
});
app.post("/test" ,(req,res) => {
    
    res.send("yo lost"); 
});
app.get("/Submit",(req,res) => {
    let number = "";
    for (let i = 0 ; i <= 100 ; i++){
        number += i + " _ ";
    };
    res.send(` numbers = ${number}`)
});
//القيام بتلقي المتغيرات من البادي في البوست مان بصيغة الجيسون
app.get("/totalBode" ,(req,res) => {
    const n1 = req.body.number1;
    const n2 = req.body.number2;
    const total = Number(n1) + Number(n2) ;
    res.send(`the total is : ${total}`)
});
//القيام ببعث القيم مع الرابط الباث
app.get("/total/:n1/:n2" ,(req,res) => {
    const n1 = req.params.n1;
    const n2 = req.params.n2;
    const total = Number(n1) + Number(n2) ;
    res.send(`the total is : ${total}`)
});
//الكويري وهو بعث القيم في الرابط بعد علامة استفهام 
app.get("/totalQuery" ,(req,res) => {
    const n1 = req.query.n1;
    const total = Number(n1) ;
    res.send(`the total is : ${total}`)
}); 
// totoryql
app.get("/TotalOfName" , (req,res) => {
    res.send(`my name is ${req.body.name} and i am ${req.query.age} yers old`);
});
//التعامل مع اضهار البيانات 
app.get("/html" ,(req,res) => {
    res.render("html-fail.ejs" , {
        name:"saber",
        age:"20",
        un:"eloued"
    })
});

app.listen(3000, () => {
   
    console.log("i am listening in port 3000");
    
    
});
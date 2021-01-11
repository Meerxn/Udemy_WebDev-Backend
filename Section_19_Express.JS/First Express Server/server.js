const express = require("express");
const app = express();


app.listen(3000, (req,res) =>{
    console.log("Hello world");
})



//LESSON: HANDLING RESPONSES AND REQUESTS. THE GET REQUEST
app.get("/" , (req,res) =>{
    res.send("Hello");
})

//LESSON: WORKING WITH ROUTES
app.get("/contact",(req,res) =>{
    res.send("<h1><strong> Contact me here</h1></strong>");
})


// CHALLENGE: NEW ROUTE ABOUT PAGE 
app.get("/about",(req,res) =>{
    res.send("<h1><strong> This is the about me page </h1></strong>");
})


// MY CURIOSITY: BELOW WORKS IF YOU COMMENT LINE 17 to 20
app.get("/contact",(req,res) =>{
    res.redirect("/about");
})


const express = require("express");
const https = require("https"); // for making calls to api server
const app = express();

// Make sure to add http to before the url on browser
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Dubai&units=metric&appid=4062dbf464c42f63913f791836cf6b75' 

app.get("/", (req,res) =>{
    https.get(url,(res1)=>{
        //When you look at the output on the console. It seems that everything needs to parsed/parasable. We need to use a body parser
        console.log(res1);
    })
    res.send("Server running");

})




app.listen(3000,()=>{
    console.log("listening to server on port 3000")
})
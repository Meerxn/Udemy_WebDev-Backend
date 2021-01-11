

// CHALLENGE CODE FOR CALCULATOR SETUP
const express = require("express");
const app = express();



// UNCOMMENT LINES BELOW TO SEE CHALLENGE SOLUTIN WORK

// app.get("/", (req,res) => {
//     res.send("Hello World");

// });
// app.listen(3000, () =>{
// console.log("logged at localhost:3000")
// })

//CHALLENGE ENDED 


//SERVING STATIC FILE LIKE AN HTML FILE
app.get("/" , (req,res) =>{
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html"); //Index.html is static file consisting of calculator design
})

app.listen(3000, () =>{
console.log("logged at localhost:3000")
})
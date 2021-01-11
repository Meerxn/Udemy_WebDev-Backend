
const bodyParser = require("body-parser");
// CHALLENGE CODE FOR CALCULATOR SETUP
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended: true})); // For getting info that comes from HTML forms use url encoded 



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


app.post("/" , (req,res) => {
    //Handling a post method sent from html file
    res.write(" <h1>Calculation Addtion Example</h1>");



    // USE \n for new line
    res.write("\n"); // res.write can be used instead of send to add multiple things  instead of sending only once thing


    console.log(req.body.num1); // JSON OBJECT RETURN so I has some intuition to access the variable before hand
    

    //Variable initialization

    // These Below will be parsed as text we need to conver them to Integer 
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    
    res.write("Text Adding example ");
    res.write(num1+num2);
    
    res.write("<br>")
    // Integer variables

     num1  = Number(num1);
     num2 = Number(num2);
     res.write(" Number value adding example ");

     

    // res.write(num1+num2); // this yields an error as res.write takes a string but 


    // We can calulate result like this and conver to a String
    var result = num1 + num2; 
    result = result.toString();
    res.write(result);


    
    
    
    
    
    
    res.end()


    // TODO: Capture values send my post requests

    // This is done via body-parser (npm install body-parser) ---> notes are put above near body parser declaration

    
})




// Processing Post requests with Body Parser:

// Updated HTML to having form send to / route 
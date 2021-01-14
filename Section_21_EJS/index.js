//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");





const app = express();
app.set('view engine', 'ejs');
//app.use('view engine', 'ejs');


//We need templates to avoid sending html file for each situation
app.get("/",(req,res)=>{
  
        
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; // my version of doing day challenge 
    
    var today = new Date();
    var day = "";

//Day challenge used array and getDay() acts as an index


// We could have used swirdh statements but it did not seem like the move for me oops

// This still WORKS
    day = days[Number(today.getDay())];


    // if (today.getDay() === 6 || today.getDay === 0){
    //     day = "weekend brah";
       
    // }
    // else{
    //     day = "weekday boi"
        
    // }
    res.render('list', {type: day});
    

// We gonna use  EJS templating. As we cannot make html mages for very condition (to much work) hence we use a template





    
// DATE OBJECT


    // var today = new Date();
    // var currentDay = today.getDay();
    
    // if (currentDay === 6 || currentDay ===0){
    //     res.send(currentDay.toString());

    // }
    // else{
    //     res.send(currentDay.toString());
    // }
   

})

app.listen(4068,()=>{
    console.log("server is on");
});


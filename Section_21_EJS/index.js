//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");





const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
//app.use(express.static(__dirname +"/"));

app.set('view engine', 'ejs');
//app.use('view engine', 'ejs');

var items = []; // scope of variable can be covered in both
// we still have variable dec in our post request
//We need templates to avoid sending html file for each situation
app.get("/",(req,res)=>{
  
        
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; // my version of doing day challenge 
    var options = {
        weekday: 'long',
        day: "numeric",
        month: 'long'

    };
    
    var today = new Date();
    var day = today.toLocaleDateString("en-US",options);

//Day challenge used array and getDay() acts as an index


// We could have used swirdh statements but it did not seem like the move for me oops

// This still WORKS
    //day = days[Number(today.getDay())];


    // if (today.getDay() === 6 || today.getDay === 0){
    //     day = "weekend brah";
       
    // }
    // else{
    //     day = "weekday boi"
        
    // }

    res.render('list', {type: day,newListItems:items});
    

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
   

});

app.post("/" ,(req,res)=>{
 var item = req.body.newItem;
 items.push(item); // doing this would add it side by side ( add with new tags ??)

res.redirect("/");

})

app.listen(process.env.PORT|| 3000,()=>{
    console.log("running");
})

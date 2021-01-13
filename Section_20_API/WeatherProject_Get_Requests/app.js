const { response } = require("express");
const express = require("express");
const https = require("https"); // for making calls to api server
const bodyParser = require("body-parser"); //install body to read form data 




const app = express();

app.use(bodyParser.urlencoded({extended:true})); // we need these to read post request

//                                  Make sure to add http to before the url on browser






app.get("/", (req,res) =>{

    res.sendFile(__dirname + "/index.html");
    
    
    

});

app.post("/",(req,res)=>{
    console.log("post recieved");
    console.log(req.body.city_name);
    console.log(req.body.unit_name);
    const city =  req.body.city_name;
    const unit = req.body.unit_name
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city+'&units='+unit+'&appid=4062dbf464c42f63913f791836cf6b75' 


//few files changes here and there 

    //                                          THIS CODE BELOW HOLDS THE JSON PARSING MODULE CODE 


    https.get(url,(res1)=>{
        //When you look at the output on the console. It seems that everything needs to parsed/parasable. We need to use a body parser
        // console.log(res1);
        // console.log(res1.statusCode);
        // status code guide here: https://www.restapitutorial.com/httpstatuscodes.html
    

    // WE trying to parser the data
    res1.on("data",(data)=>{

        // The format of this is in Hexa decimal hence  we need to parse it further
        console.log(data)

        // Parse using JSON.parse
        const wData = JSON.parse(data);
        const temp = wData.main.temp;
        const description = wData.weather[0].description;
        const country = wData.sys.country;

        //This is the example of finding an icon
        console.log(wData.weather[0].icon); //Correctly logged
        const icon = wData.weather[0].icon;
        




        // Format now we can see it in JSON format
       // console.log(wData);



       //Parsing checks on own of variables here:

       console.log(wData.main.temp); //works
       console.log(wData.sys.country);

       //Slightly complex ones?

       console.log(wData.weather[0].description); //Works !.
       
       

       // To get the navation we caN use json viewer awesome as well (Chrome extension we installed) allows us to just paste
       // We can flatten a JSON object by using JSON.stringify() 


       // Here we are writing multiple things to the server hence we use res.write because we can only have one
       // res.send() because res.send comes with an  res.end() hence we can use res.write

       

       res.write("<h1>Weather Description</h1>" );
       res.write("<h3> Temperature is " + temp +" in " + country);



        //We also want to add the icon URL

        //sample url = http://openweathermap.org/img/wn/10d@2x.png
        var imgUrl =  "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        //WORKS
        res.write("<img src =" + imgUrl + ">"  );

       res.end();








    })



















})


})






app.listen(3000,()=>{
    console.log("listening to server on port 3000")
})
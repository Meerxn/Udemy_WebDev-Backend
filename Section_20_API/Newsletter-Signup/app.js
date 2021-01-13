const express = require("express");
const app = express();
const bodyParser  = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const https = require("https");

app.listen(3000,()=>{
    console.log("running");
})

app.use(express.static(__dirname)); //static folder to use css

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/signup.html")
});


//  Challenge

app.post("/",(req,res)=>{
    //WORKS
    console.log(req.body.fname);
    console.log(req.body.ename);
    console.log(req.body.lname);


    const first_name = req.body.fname
    const  second_name = req.body.lname
    const email = req.body.ename;

    // MEMBERS -- >  For my reference: An array of objects, each representing an 
    //email address and the subscription status for a specific list. 
    //Up to 500 members may be added or updated with each API call.
var data = {
    members :  [ 
        {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: first_name,
                LNAME: second_name

            }

        }
    ]
};

var jsonData = JSON.stringify(data);
const list_id = "6f47b563d0"
const url = "https://us7.api.mailchimp.com/3.0/lists/6f47b563d0";

// Authentication with API KEY

//curl --request GET \
//--url 'https://<dc>.api.mailchimp.com/3.0/' \
//--user 'anystring:YOUR_API_KEY'

//Mail chip auth plus https auth

//https auth needs options takes takes method
const options = {
    method: "POST",
    auth: "Meerxn3342:f3d277848a6a8fba4352d1a7927ad411-us7"
}
const request = https.request(url,options,function(response)  {
    if (response.statusCode === 200){
        res.sendFile(__dirname + "/success.html");
    }
    else{
        res.send("Oops something went wrong")
    }
    response.on("data",(data)=>{
        console.log(JSON.parse(data));

    });
})

    request.write(jsonData);
    request.end();




    

    


});


app.post("/failure", (req,res)=>{
    res.redirect("/");
})



//d16580d0cbf51006625cb3270a55029f-us7

//6f47b563d0 audience 
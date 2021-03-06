const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});
const fruitSchema = new mongoose.Schema({
    name: { 
        type : String,
        //required : [true,"Please enter a name "] },
    },
    rating: {
        type: Number,
        min: 1,
        max : 10
    },  
    review: String
});
const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,

});


const Fruit = mongoose.model("Fruit",fruitSchema);
const People = mongoose.model("People",peopleSchema)


const fruit  = new Fruit({
   // name: "pumpkin",
    rating: 9,
    review: "ok"
});
//fruit.save()
// const grapefruit = new Fruit({
//     name: "grape fruit",
//     rating: 8,
//     review: "big nice"
// });
// const pineapple = new Fruit({
//     name: "Pineapple",
//     rating: 9,
//     review: "Good"
// });
// const watermelon = new Fruit({
//     name: "Water melon",
//     rating: 10,
//     review: " watery"
// });


const person = new People({
    name: "xyz",
    age: 21
});

// Fruit.insertMany([grapefruit,watermelon,pineapple],function(err){
//     if (err){
//         console.log(err)
//     }
// })
//person.save()   
// Fruit.find((err,data)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("FRUITS DATA")
//         data.forEach((item)=>{
//             console.log(item.name);
//         });
//     }
// });  

// Fruit.updateOne({_id :"60eac94748722e2da8b0111d"}, {name:"Peaches"},(err)=>{
// if (err){
//     console.log(err)
// }
// else{
//     console.log("data has been updated")
// }
// } );

//mongoose.connection.close();
Fruit.deleteOne({name: "Peaches"} , (err)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log("data entry removed");
    }
})
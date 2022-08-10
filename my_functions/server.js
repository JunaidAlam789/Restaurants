exports.handler = async function (event, context) {
const path = require("path")
const express = require("express")
const app = express()
const cors = require('cors');

app.use(express.static(path.join(__dirname, "public")))

app.use(cors());
var restaurant;
const { MongoClient, ServerApiVersion } = require('mongodb');
const { async } = require("regenerator-runtime");
const { handler } = require("./serverbackup");
console.log("hello")

  const uri = "mongodb+srv://testdb:testdb123@cluster0.2yklpfd.mongodb.net/?retryWrites=true&w=majority";
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
      // try{
        const database = client.db('sample_restaurants');
        const restaurants = database.collection('restaurants');
       // console.log(restaurants)

       // exports.handler = async function (event, context) {    
  //let name = event.path.split("/").pop()
   
         
                  
         // perform actions on the collection object
         //async function run(restaurant){
         const query = { cuisine :  'American' };
         //const restaurant =collection.findOne(query).then(console.log("hello")).catch();
        restaurant=await restaurants.findOne(query);
         console.log(restaurant);
         //}
   
console.log("closing hello");
client.close() 
return {
  statusCode: 200,
  headers: { "Cache-Control": "max-age=10" },
  body: JSON.stringify({ message: "Hello World"})
}
     
      } 
  



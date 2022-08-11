exports.handler = async function (event, context) {
    let name = event.path.split("/").pop()
    if (name === "Indian") {
        return {
          statusCode: 200,
          headers: { "Cache-Control": "max-age=10" },
          body: JSON.stringify({ name: "Indian" })
        }
      } else    if (name === "Pakistani") {
//const dotenv = require("dotenv")
//dotenv.config()
const mongodb = require("mongodb")
const express = require("express")
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://testdb:testdb123@cluster0.2yklpfd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//process.env.CONNECTIONSTRING
console.log(name,"hello1");
client.connect( err=> {
    async function run (){
    console.log("hello2");
    try {
     
     const database = client.db('sample_restaurants');
     const restaurants = database.collection('restaurants');
    // const query = { name: `${restname}` };
     //const query = { name: "Subway" };
     //const rest = await restaurants.findOne(query);
       
    console.log(restaurants);

     
        return {
            statusCode: 200,
            headers: { "Cache-Control": "max-age=10" },
            body: JSON.stringify(restaurants)
          }
          
        
       /* else {
        //res.json("You do not currently have any restaurant in this cuisine collection.")
        
        return {
            statusCode: 200,
            headers: { "Cache-Control": "max-age=10" },
            body: JSON.stringify({ message: "Restaurant not found." })
          }
      
      } */
    } catch (err) {
      console.log(err)
      //res.json("Try again later.")
      
      return {
        statusCode: 404,
        headers: { "Cache-Control": "max-age=10" },
        body: JSON.stringify({ message: "error." })
      }
      

      
    }
    //finally{
     // client.close();
      
    //}
    
 // }) //app get closing
  } // async anonymous function closing
  run()
  //app.listen(process.env.PORT || 3000)
});
//client.close();
    }
}
 //app.listen(process.env.PORT || 3000)





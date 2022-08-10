/* exports.handler = async function (event, context) {
  let name = event.path.split("/").pop()
  if (name === "purrsloud") {
    return {
      statusCode: 200,
      headers: { "Cache-Control": "max-age=10" },
      body: JSON.stringify({ name: "Purrsloud" })
    }
  } else {
    return {
      statusCode: 404,
      headers: { "Cache-Control": "max-age=10" },
      body: JSON.stringify({ message: "Animal not found." })
    }
  }
} */
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
console.log("hello1");
client.connect( err=> {
    async function run (){
 // app.get("/", async (req, res) => {
    console.log("hello2");
    try {
       // const db = client.db("sample_restaurants");
     // const rest = await db.collection("restaurants").find({ cuisine: "Pakistani" }).toArray()
     rest= ["hotel1","hotel2","hotel3"];
      if (rest.length) {
        //res.json(rest)
        console.log(rest);
        client.close();
        return {
            statusCode: 200,
            headers: { "Cache-Control": "max-age=10" },
            body: JSON.stringify({message: "Restaurants Hello."})
          }
          
        
      } else {
        //res.json("You do not currently have any restaurant in this cuisine collection.")
        client.close();
        return {
            statusCode: 200,
            headers: { "Cache-Control": "max-age=10" },
            body: JSON.stringify({ message: "Restaurants not found." })
          }
      
      }
    } catch (err) {
      console.log(err)
      //res.json("Try again later.")
      client.close();
      return {
        statusCode: 404,
        headers: { "Cache-Control": "max-age=10" },
        body: JSON.stringify({ message: "error." })
      }
      

      
    }
    finally{
      client.close();
      
    }
    
 // }) //app get closing
  } // async anonymous function closing
  run()
  //app.listen(process.env.PORT || 3000)
});
    }
}
 //app.listen(process.env.PORT || 3000)





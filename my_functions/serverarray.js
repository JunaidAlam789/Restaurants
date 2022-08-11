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
    if (name === "cuisine") {
        return {
          statusCode: 200,
          headers: { "Cache-Control": "max-age=10" },
          body: JSON.stringify({
            American: "American",
            Pakistani: "Pakistani",
            Indian: "Indian"  })
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
 // app.get("/", async (req, res) => {
    console.log("hello2");
    try {
        const db = client.db("sample_restaurants");
      const rest = await db.collection("restaurants").find({ cuisine: "Pakistani" }).toArray()
     //rest= ["hotel1","hotel2","hotel3"];
      if (rest.length) {
        const restlist=rest.map((rest1)=>{return rest1.name})
        //res.json(rest)
        console.log(restlist);
        
        return( {
            statusCode: 200,
            headers: { "Cache-Control": "max-age=100" },
            body: JSON.stringify(restlist)
          })
          
        
      } else {
        //res.json("You do not currently have any restaurant in this cuisine collection.")
        
        return {
            statusCode: 200,
            headers: { "Cache-Control": "max-age=10" },
            body: JSON.stringify({ message: "Restaurants not found." })
          }
      
      }
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
   } //if
} //handler
 //app.listen(process.env.PORT || 3000)





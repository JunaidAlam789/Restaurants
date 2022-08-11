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
     
    // const database = client.db('sample_restaurants');
    // const restaurants = database.collection('restaurants');
    // const query = { name: `${restname}` };
     //const query = { name: "Subway" };
     //const rest = await restaurants.findOne(query);
     const restaurants={"_id":"5eb3d668b31de5d588f42fa9","address":{"building":"2508","coord":[-73.9727279,40.7928619],"street":"Broadway","zipcode":"10025"},"borough":"Manhattan","cuisine":"Sandwiches","grades":[{"date":"2014-05-30T00:00:00.000Z","grade":"A","score":5},{"date":"2013-05-24T00:00:00.000Z","grade":"A","score":12},{"date":"2012-05-30T00:00:00.000Z","grade":"A","score":7},{"date":"2012-01-18T00:00:00.000Z","grade":"A","score":5},{"date":"2011-08-11T00:00:00.000Z","grade":"A","score":13}],"name":"Subway","restaurant_id":"40539022"}
       
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





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
  const uri = "mongodb+srv://testdb:testdb123@cluster0.2yklpfd.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  


  let name = event.path.split("/").pop()
  if (name === "cuisine") {
    return {
      statusCode: 200,
      headers: { "Cache-Control": "max-age=10" },
      body: JSON.stringify({
        American: "American",
         Pakistani: "Pakistani",
         Indian: "Indian",
         Italian: "Italian"
       })
    }
  } else if (name === "American") {
    app.get('/American', async (req, res) => {
      //let restname = req.params.restname;
      //var restaurant;
      //var restlist=[];
      const uri = "mongodb+srv://testdb:testdb123@cluster0.2yklpfd.mongodb.net/?retryWrites=true&w=majority";
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
       try{
     // client.connect(err => {
          //const collection = client.db("sample_restaurants").collection("restaurants");
          const database = client.db('sample_restaurants');
        const restaurants = database.collection('restaurants');
         // console.log(collection);
         
         // perform actions on the collection object
         const query = { cuisine :  'American' };
         //const restaurant =collection.findOne(query).then(console.log("hello")).catch();
         const cursor= restaurants.find(query);
        var restlist=[];
        await cursor.forEach(rest => {
          //console.log(rest.name, rest.cuisine )
          //console.log(rest.name, "name");
        restlist.push(rest.name);   })
          //console.log(restlist,"list")
        // .then( ()=>{   //then
          res.json(
              //message: 'Hello World'
             { restlist}
          );
          console.log(restlist,"list")
        //  client.close()
     // })  //then
          
        //  .catch(err=>console.log(err))
          
      } //try
      catch{err=>console.log(err)}
          finally{
              client.close() 
          }
  
      //  }); // connect
     // res.json({
      //    message: 'Hello World'
     // });  
      
  
  
  
});
  } else {
    return {
      statusCode: 404,
      headers: { "Cache-Control": "max-age=10" },
      body: JSON.stringify({ message: "Cuisine not found." })
    }
  }
  
}

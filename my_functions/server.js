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
  client.close;


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
  } else if (name === "food") {
    return {
      statusCode: 200,
      headers: { "Cache-Control": "max-age=10" },
      body: JSON.stringify({ American: "American",
      Pakistani: "Pakistani",
      Indian: "Indian",
      Italian: "Italian" })
    }
  } else {
    return {
      statusCode: 404,
      headers: { "Cache-Control": "max-age=10" },
      body: JSON.stringify({ message: "Cuisine not found." })
    }
  }
  
}

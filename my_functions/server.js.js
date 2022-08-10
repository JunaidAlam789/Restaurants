exports.handler = async function (event, context) {
  let name = event.path.split("/").pop()
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
client.close();
app.get('/cuisine', (req, res) => {
  // let cuisine = req.params.name;
 console.log("cuisine")
   res.json({
       American: "American",
       Pakistani: "Pakistani",
       Indian: "Indian",
       Italian: "Italian"
   });
});
  
}

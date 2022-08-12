const dotenv = require("dotenv")
dotenv.config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const CONNECTIONSTRING = "mongodb+srv://testdb:testdb123@cluster0.2yklpfd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//mongodb.connect(CONNECTIONSTRING, { useUnifiedTopology: true }, function (err, client) {
  module.exports = client
  const app = require("./app.js")
  app.listen(process.env.PORT || 3000)
//})

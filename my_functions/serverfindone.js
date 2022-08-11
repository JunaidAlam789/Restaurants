const mongodb = require("mongodb")
//const express = require("express")
//const app = express()
//const dotenv = require("dotenv")
//dotenv.config()

exports.handler = async function (event, context,callback) {
 // exports.handler = async function (event, context) {
    //let name = event.path.split("/").pop()
    


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://testdb:testdb123@cluster0.2yklpfd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//var subway={"_id":"5eb3d668b31de5d588f42fa9","address":{"building":"2508","coord":[-73.9727279,40.7928619],"street":"Broadway","zipcode":"10025"},"borough":"Manhattan","cuisine":"Sandwiches","grades":[{"date":"2014-05-30T00:00:00.000Z","grade":"A","score":5},{"date":"2013-05-24T00:00:00.000Z","grade":"A","score":12},{"date":"2012-05-30T00:00:00.000Z","grade":"A","score":7},{"date":"2012-01-18T00:00:00.000Z","grade":"A","score":5},{"date":"2011-08-11T00:00:00.000Z","grade":"A","score":13}],"name":"Subway","restaurant_id":"40539022"}
   var subway;   
//app.get('/', (req, res) => {
//process.env.CONNECTIONSTRING
console.log("name","hello1");
const pass = (body) => {callback( null, {
  statusCode: 200,
  body: JSON.stringify(body)
})}
//client.connect( async (err)=> {
  //  async function run (){
    console.log("hello2");
       
   // const database = client.db('sample_restaurants');
   //  const restaurants = database.collection('restaurants');
    // const query = { name: `${restname}` };
    // const query = { name: "Subway" };
    // const subway = await restaurants.findOne(query);
    subway={"_id":"5eb3d668b31de5d588f42fa9","address":{"building":"2508","coord":[-73.9727279,40.7928619],"street":"Broadway","zipcode":"10025"},"borough":"Manhattan","cuisine":"Sandwiches","grades":[{"date":"2014-05-30T00:00:00.000Z","grade":"A","score":5},{"date":"2013-05-24T00:00:00.000Z","grade":"A","score":12},{"date":"2012-05-30T00:00:00.000Z","grade":"A","score":7},{"date":"2012-01-18T00:00:00.000Z","grade":"A","score":5},{"date":"2011-08-11T00:00:00.000Z","grade":"A","score":13}],"name":"Subway","restaurant_id":"40539022"}
       
    console.log(subway);
    pass(subway)
    
    //})
   // client.close();
    /* return   ({
      statusCode: 200,
      headers: { "Cache-Control": "max-age=10" },
      body: JSON.stringify(subway)
    }) */
        
    
  //}) //app get closing
 // } // async anonymous function closing
  //run()


  //app.listen(process.env.PORT || 3000)

        
   
} //handler
 //app.listen(process.env.PORT || 3000)





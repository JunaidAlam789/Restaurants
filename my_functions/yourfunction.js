const mongodb = require("mongodb")
const uri = "mongodb+srv://testdb:testdb123@cluster0.2yklpfd.mongodb.net/?retryWrites=true&w=majority";

exports.handler = async function (event, context) {
  const client = await mongodb.connect(uri, { useUnifiedTopology: true })
  const db = client.db()

  try {
    const dogs = await db.collection("restaurants").find({ cuisine: "Pakistani" }).toArray()
    client.close()
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dogs)
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: "Please try again later."
    }
  }
}
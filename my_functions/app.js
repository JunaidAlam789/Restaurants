const express = require("express")
const app = express()
const client = require("./db.js")
const db = client.db("sample_restaurants")

app.get("/", async (req, res) => {
  try {
    const dogs = await db.collection("restaurants").find({ cuisine : "Pakistani" }).toArray()
    if (dogs.length) {
      res.json(dogs)
    } else {
      res.json("You do not currently have any dogs in your pets collection.")
    }
  } catch (err) {
    console.log(err)
    res.json("Try again later.")
  }
})

module.exports = app

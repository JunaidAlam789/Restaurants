exports.handler = async function (event, context) {
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

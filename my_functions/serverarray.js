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
       console.log(name,"hello1");
         
 
      const rest= [{name: "hotel1"}, {name: "hotel2"}, {name: "hotel3"}];
      if (rest.length) {
        const restlist=rest.map((rest1)=>{return rest1.name})
        //res.json(rest)
        console.log(restlist);
        //rest= ["hotel1","hotel2","hotel3"];
        return {
            statusCode: 200,
            headers: { "Cache-Control": "max-age=100" },
            body: JSON.stringify({restlist})
          }
          
        
      } else {
        //res.json("You do not currently have any restaurant in this cuisine collection.")
        
        return {
            statusCode: 200,
            headers: { "Cache-Control": "max-age=10" },
            body: JSON.stringify({ message: "Restaurants not found." })
          }
      
      }
  
    
   } //if
} //handler
 




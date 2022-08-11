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
         
 
      const restlist= ["Roti Boti Restaurant","Bukhari Restaurant","Pakiza Restaurant","Gourmet Sweets","Indo-Pak Halal Restaurant","Starlight Grill Restaurant & Sweets","Johal Deli","Shandar Sweet & Restaurant","Lasani Restaurant","Super Skyway Restaurant","Mithaas","Gyro King","Mashallah Sweets And Restaurant","Salt And Pepper Diner","Gourmet Restaurant","New Punjab Restaurant & Grill","Curry King","Tawa Tandoor","Aman Restaurant","Al Naimat Restaurant & Sweets","Basera Restaurant","Chatkhara Grill","Desi Shack","Chatkhara Restaurant","Curry Kabab","Pakistan Tea House","Bar-B-Q Tonight","Kabab House","Kababish","Bbq Village","Bismillah Kabab & Curry"];
      if (rest.length) {
        
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
 




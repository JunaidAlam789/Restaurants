import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Axios from "axios"


function RestaurantList(props) {
  // in the real world you would want to show some sort of animated loading / spinner icon while the axios request is still fetching the data
  const [restaurant, setRestaurant] = useState(["hotel1","hotel2","hotel3"])
  const [count, setCount] = useState(0)
  const [hotel, setHotel] = useState("subway")
  var { name } = useParams()

  

  useEffect(() => {
    async function ourRequest() {
     // name="Pakistani";
      // in the real world you would want to cancel this Axios request using React's return/cleanup function of useEffect, so that if a slow request was still running and the user clicked on a new link before the first request finished, the first request would be cancelled instead of eventually finishing and using data that the user is no longer interested in...
     // const response = await Axios(`/cuisine/${name}`)
      const response = await Axios(`/${name}`)
      //const response = await Axios(`/cuisine`)
      console.log("RestaurantList")
      if(response.data != null){
     setRestaurant(response.data.restlist)}
      console.log(response.data.restlist) ;
      //document.title = `${response.data} | Our Amazing App`
    }
    ourRequest().catch(err=>console.log(err))
  }, [])
  function handleChange2(value){
    console.log(value);
    //setHotel(value);
  }

  return (
    <div className="row">
    <div className="col-md-8 mb-4 mb-md-0">
      <h2 className="display-4">
        {name} Restaurants
      </h2>
      <p>Counter is clicked {count} time</p>
      <p>Selected hotel is clicked {hotel} time</p>
      <button onClick={()=>setCount(count+1)}>Counter</button>
      <p>List of Restaurants </p>
           
    </div>
    <div>
    <select onChange={e => setHotel(e.currentTarget.value)}>
      {restaurant.map(item => (
        <option
          key={item}
          value={item}
        >
          {item}
        </option>
      ))}
    </select>
      
    </div>
    
    <a href={"/rest/"+ hotel}>{hotel}</a>
    
      
  </div>
  )
}

export default RestaurantList

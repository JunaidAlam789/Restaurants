import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Axios from "axios"

function Restaurant(props) {
  // in the real world you would want to show some sort of animated loading / spinner icon while the axios request is still fetching the data
  const [restaurant, setRestaurant] = useState({})
  const [count, setCount] = useState(0)
  const { restname } = useParams()
console.log(restname)
  useEffect(() => {
    async function ourRequest() {
      // in the real world you would want to cancel this Axios request using React's return/cleanup function of useEffect, so that if a slow request was still running and the user clicked on a new link before the first request finished, the first request would be cancelled instead of eventually finishing and using data that the user is no longer interested in...
      console.log(restname) 
     // const response = await Axios(`/restaurant/${restname}`)
      const response = await Axios(`/.netlify/functions/subway`)
      
      //if(response.data != null){}
      setRestaurant(response.data)
      console.log(response.data) 
       
      //document.title = `${response.data} | Our Amazing App`
    }
    ourRequest().catch(err=>console.log(err))
  }, [count])

  return (
    <div className="row">
    <div className="col-md-8 mb-4 mb-md-0">
      <h2 className="display-4">
        Restaurant
      </h2>
      <p>Counter is clicked {count} time</p>
      <button onClick={()=>setCount(count+1)}>Counter</button>
      <p className="lead">name: {restaurant.name}</p>
      <p className="lead">restaurant_id: {restaurant.restaurant_id}</p>
      <p className="lead">cuisine: {restaurant.cuisine}</p>
      <p className="lead">borough: {restaurant.borough}</p>
      
    </div>
    <div className="col-md-4">
      
    </div>
  </div>
  )
}

export default Restaurant

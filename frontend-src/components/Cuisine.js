import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Axios from "axios"

function Restaurant(props) {
  // in the real world you would want to show some sort of animated loading / spinner icon while the axios request is still fetching the data
  //const [animal, setAnimal] = useState({ American: "", Pakistani: "" })
  const [cuisine, setCuisine] = useState({})
  const { name } = useParams()

  useEffect(() => {
    async function ourRequest() {
      // in the real world you would want to cancel this Axios request using React's return/cleanup function of useEffect, so that if a slow request was still running and the user clicked on a new link before the first request finished, the first request would be cancelled instead of eventually finishing and using data that the user is no longer interested in...
      const response = await Axios(`/cuisine`)
      setCuisine(response.data)
       console.log(response.data) 
      document.title = `${response.data} | Our Amazing App`
    }
    ourRequest()
  }, [name])

  return (
    <div className="row">
    <div className="col-md-8 mb-4 mb-md-0">
      <h2 className="display-4">
        Cuisine
      </h2>
      <Link className="text-muted ml-1" to="/cuisine/American"> American </Link>
      <Link className="text-muted ml-1" to="/cuisine/Pakistani"> Pakisntani </Link>
      <Link className="text-muted ml-1" to="/cuisine/Indian"> Indian </Link>
      <p className="lead">{cuisine.American}</p>
      <p className="lead">{cuisine.Pakistani}</p>
      <p className="lead">{cuisine.Indian}</p>
      
    </div>
    <div className="col-md-4">
      
    </div>
  </div>
  )
}

export default Restaurant

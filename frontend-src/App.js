import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom"
import Home from "./components/Home"
import Animal from "./components/Animal"
import About from "./components/About"
import Restaurant from "./components/Restaurant"
import RestaurantList from "./components/RestaurantList"

import Cuisine from "./components/Cuisine"
function App() {
  return (
    <BrowserRouter>
      <header className="bg-light pt-3">
        <div className="container">
          <h1 className="display-1">Our Amazing App</h1>
          <ul className="nav nav-tabs">
            
            
            
            <li className="nav-item">
              <NavLink to="/cuisine/cuisine" className="nav-link" activeClassName="active">
                Cuisine
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cuisine/American" className="nav-link" activeClassName="active">
                American
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cuisine/Pakistani" className="nav-link" activeClassName="active">
                Pakistani
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cuisine/Indian" className="nav-link" activeClassName="active">
                Indian
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/rest/Subway" className="nav-link" activeClassName="active">
                Subway
              </NavLink>
            </li>
          </ul>
        </div>
      </header>

      <div className="container py-3 py-md-5">
        <Switch>
        <Route path="/cuisine/cuisine">
            <Cuisine />
          </Route>
          <Route path="/select/cuisine">
            <RestaurantList />
          </Route>
          <Route path="/cuisine/:name">
            <RestaurantList />
          </Route>
          <Route path="/rest/:restname">
            <Restaurant />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

      <footer className="border-top pt-3">
        <p className="small text-center text-muted">
          <Link className="text-muted mr-1" to="/">
            Home
          </Link>{" "}
          |{" "}
          <Link className="text-muted ml-1" to="/about">
            About Us
          </Link>
          |{" "}
          <Link className="text-muted ml-1" to="/cuisine">
            Cuisine
          </Link>
        </p>
      </footer>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))

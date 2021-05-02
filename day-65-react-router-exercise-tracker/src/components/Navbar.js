import React from 'react'
import {Link} from 'react-router-dom'

function Navbar({isLoggedIn}) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">Health Tracker</Link>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/food">Food</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/exercises">Exercises</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {isLoggedIn ? "Logout" : "Login"}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

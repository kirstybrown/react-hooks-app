import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

      <Link to="/" className="navbar-brand" > useContext </Link>
    
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
         <NavLink activeClassName="active" to="/" className="nav-link" aria-current="page" > Home </NavLink>
         <NavLink activeClassName="active" to="/about" className="nav-link" > About </NavLink>
         <NavLink activeClassName="active" to="/login" className="nav-link" > Login </NavLink>
        </div>
      </div>
  </nav>
  )
}

export default NavBar
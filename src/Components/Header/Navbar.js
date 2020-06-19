import React from 'react'
import {  Link } from "react-router-dom"

const Navbar = () => {


return (

    <nav className="nav-bar">
        <ul className="nav-list">
        <li> <Link to="/"> Novedades </Link>  </li>
        <li> <Link to="/"> La Raza </Link>  </li>
        <li> <Link to="/"> Nosotros </Link> </li>
        <li> <Link to="/"> Fotos! </Link> </li>
        <li> <Link to="/"> Contácto </Link> </li>
      
   
            
            
      
        </ul>
    </nav>

)



}


export default Navbar
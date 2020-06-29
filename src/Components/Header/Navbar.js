import React from 'react'
import {  Link } from "react-router-dom"

const Navbar = () => {


return (

    <nav className="nav-bar">
        <ul className="nav-list">
        <li> <Link to="/home"> Home </Link>  </li>
        <li> <Link to="/novedades"> Novedades </Link>  </li>
        {/* <li> <Link to="/"> La Raza </Link>  </li> */}
        <li> <Link to="/nosotros"> Nosotros </Link> </li>
        <li> <Link to="/fotos"> Fotos! </Link> </li>
        <li> <Link to="/contacto"> Contacto </Link> </li>
      
   
            
            
      
        </ul>
    </nav>

)



}


export default Navbar
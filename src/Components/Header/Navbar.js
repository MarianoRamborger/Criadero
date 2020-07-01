import React from 'react'
import {  Link } from "react-router-dom"


const Navbar = (props) => {

    const {sectionState, changeSectionState} = props;


const handleStateChange = (event) => {

   console.log(sectionState)
    changeSectionState(event.target.id)
   
            
    }

    


return (

    <nav className="nav-bar">
        <ul className="nav-list">

        {
            sectionState === "home" ?
            <li> <Link to="/home"  className="selected" id="home"  onClick={handleStateChange} > Home </Link>  </li>
            : 
            <li> <Link to="/home"  id="home"  onClick={handleStateChange} > Home </Link>  </li>
        }

        {
            sectionState === "novedades" ?  
            <li> <Link to="/novedades" className="selected" id="novedades"  onClick={handleStateChange} > Novedades </Link>  </li>
            :  
            <li> <Link to="/novedades" id="novedades" onClick={handleStateChange}  > Novedades </Link>  </li>
        }

        {
            sectionState === "nosotros" ?
            <li> <Link to="/nosotros" className="selected" id="nosotros" onClick={handleStateChange}> Nosotros </Link> </li>
            :  
            <li> <Link to="/nosotros" id="nosotros" onClick={handleStateChange}  > Nosotros </Link> </li>

        }

        {
            sectionState === "fotos" ?
            <li> <Link to="/fotos"  className="selected" id="fotos" onClick={handleStateChange}> Fotos! </Link> </li>
            : 
            <li> <Link to="/fotos"  id="fotos" onClick={handleStateChange} > Fotos! </Link> </li>
        }
       

        
       

      
        {/* <li> <Link to="/contacto"> Contacto </Link> </li> */}
      
   
            
            
      
        </ul>
    </nav>

)



}


export default Navbar
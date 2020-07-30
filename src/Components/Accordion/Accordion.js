import  React from 'react'
import { FullpageAccordion, Panel } from "react-fullpage-accordion";
import "react-fullpage-accordion/dist/react-fullpage-accordion.css";
import "./Accordion.css";
// import Contacto from '../../Images/Sections/verdeContacto.jpg'
import Nosotros from '../../Images/Sections/nosotros.jpg'
import Fotos from '../../Images/Sections/Fotos.jpg'
// import Nosotros from '../../Images/Sections/verdeNosotros.jpg'
import Novedades from '../../Images/Sections/Novedades.jpg'
import {Link} from 'react-router-dom'





const Accordion = (props) => {

    const {changeSectionState} = props

    const handleStateChange = (event) => {
 
        changeSectionState(event.target.id)
    }

    return (
    
   
        <FullpageAccordion >

        <Panel
                itemId="0"
                background={Novedades}
                >
                <p></p>
                <p>
                <Link to="/novedades" id="novedades" onClick={handleStateChange}> Novedades </Link>
                </p>
                <p></p>
        </Panel>

      

        <Panel
                itemId="1"
                background={Nosotros}
                >
                <p></p>
                <p>
                    <Link to="/nosotros" id="nosotros"   onClick={handleStateChange}> Nosotros </Link>
                </p>
                <p></p>
        </Panel>
        
        <Panel
            itemId="2"
            background={Fotos}
            >
            <p></p>
            <p>
            <Link to="/fotos" id="fotos" onClick={handleStateChange} > Fotos </Link>
            </p>
            <p></p>
        </Panel>
        {/* <Panel
                itemId="3"
                background={Contacto}
                >
                <p></p>
                <p>
                <Link to="/contacto"> Contacto </Link>
                </p>
                <p></p>
        </Panel> */}

      </FullpageAccordion>


    )
}

export default Accordion
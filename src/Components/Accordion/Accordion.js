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





const Accordion = () => {

    return (
    
   
        <FullpageAccordion >

        <Panel
                itemId="0"
                background={Novedades}
                >
                <p></p>
                <p>
                <Link to="/novedades"> Novedades </Link>
                </p>
                <p></p>
        </Panel>
        <Panel
                itemId="1"
                background={Nosotros}
                >
                <p></p>
                <p>
                    <Link to="/nosotros"> Nosotros </Link>
                </p>
                <p></p>
        </Panel>
        <Panel
            itemId="2"
            background={Fotos}
            >
            <p></p>
            <p>
            <Link to="/fotos"> Fotos </Link>
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
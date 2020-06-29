import React from 'react'
import {SpringModal} from '../Modal/Modal'
import {Link} from 'react-router-dom'
import notFoundPic from '../../Images/NotFound/notFoundPic.jpg'



const NotFound = () => {

    return (

        <div className="left-column-container" >
            <div className="left-column">

                <div className='four0four'>

                <h2 className="not-found"> 404 - No encontrado... </h2>

                <SpringModal image={notFoundPic} alt={"foto"} className={"fotos-section-pic contrast not-found"} />

                <Link to="/" className="escape">  Regresar al inicio </Link>
            </div>


             </div>
        </div>
    )


}


export default NotFound
import React from 'react'
import Certificado from '../../Images/Cert/cert.jpeg'


const RightColumn = () => {

    return ( 
    <div className="right-column ">

        <img className="cert-pic" src={Certificado} alt="Certificado" />

        <h3> Que dicen de nosotros</h3>
            <p> Acá irian los reviews</p>

        <h3> Charlemos! </h3>
        <p> Acá iría el chat de facebook</p>

    </div>
    )

}






export default RightColumn
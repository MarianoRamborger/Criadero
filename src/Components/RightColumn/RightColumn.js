import React from 'react'
import Certificado from '../../Images/Cert/cert.jpeg'
import {SpringModal} from '../Modal/Modal'
import CustomerChat from './Fbchat/CustomerChat'
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailIcon from '@material-ui/icons/Mail';
import {isMobile} from "react-device-detect";

const RightColumn = () => {

    return ( 
    <div className="right-column">

        <SpringModal image={Certificado} alt={"Certificado"} className={"cert-pic contrast"}  />
       

        <p className="font-color right-column-text"> Encontrarnos en...</p>

        <div className="fb-links-div"> 
                <div className="fb-links">
                    <a href="https://www.facebook.com/Maltes-Copos-de-Nieve-Criadero-351312871715721/" className="fb-icon" target="blank"> <FacebookIcon /> </a> 
                    <a href="https://www.facebook.com/maltescoposdenieve.criadero/" className="fb-icon" target="blank">  <FacebookIcon /> </a> 
                    <a href="https://www.facebook.com/Copito-De-Seda-331569503965709/" className="fb-icon" target="blank"> <FacebookIcon /> </a>   
                    </div>
                </div>
       
                <p className="font-color right-column-text"> Llamanos al..</p>
        

        {isMobile ?  
                <div className="phone-div"> 
                <div className="phone-number">
                <a href="tel:444444444">+47 333 78 901  <PhoneInTalkIcon/>   </a>
                </div>
                </div>
        :
        <div className="phone-div"> 
                <div className="phone-number">
                <p className="phone-number-p"> <PhoneInTalkIcon/>  <br/> XXXXXXXX </p>
                </div>
                </div>
                }


        <CustomerChat />
   

    </div>
    )

}






export default RightColumn
import React from 'react'
import Certificado from '../../Images/Cert/cert.jpeg'
import {SpringModal} from '../Modal/Modal'
import {TextModal} from '../Modal/TextModal'
import CustomerChat from './Fbchat/CustomerChat'
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailIcon from '@material-ui/icons/Mail';
import {isMobile} from "react-device-detect";
import { CarrouselModal } from '../Modal/CarrouselModal'

const RightColumn = () => {

    return ( 
    <div className="right-column">

    <div className="right-column-cap">
     
    </div>

        <div className="right-column-sticky">

        <SpringModal image={Certificado} alt={"Certificado"} className={"cert-pic contrast"} fullScreenClassName={'cert-big'}  />
       


        <div className="contact-flex-div">
                <p className="contact-flex-title"> Opiniones </p>
                <div className="comments-icon">

                <CarrouselModal/>
                  
                </div>
             </div> 

    

     


            <div className="contact-flex-div">
                <p className="contact-flex-title"> Facebook </p>

                 <div className="contact-flex-icon-row">

                    <a href="https://www.facebook.com/Maltes-Copos-de-Nieve-Criadero-351312871715721/" className="fb-icon" target="blank"> <FacebookIcon /> </a> 
                    <a href="https://www.facebook.com/maltescoposdenieve.criadero/" className="fb-icon" target="blank">  <FacebookIcon /> </a> 
                    <a href="https://www.facebook.com/Copito-De-Seda-331569503965709/" className="fb-icon" target="blank"> <FacebookIcon /> </a>   
             </div> 
            </div>



       
            <div className="contact-flex-div">
                <p className="contact-flex-title"> Llamanos </p>
    
                {isMobile ?  
                    <div className="phone-div"> 
                    <div className="phone-number">
                    <a href="tel:47100945"> <PhoneInTalkIcon/>   </a>
                    </div>
                    </div>
                
                :
                    <div className="phone-div"> 
                            <div className="phone-number">
                            <TextModal className={"phone-modal"} text={"4710-0945"} icon={"phone"} />
                            <p className="phone-number-p phone-big"> 4710-0945</p>    
                            </div>
                            </div>
            }
                </div>
 

            <div className="contact-flex-div">
                <p className="contact-flex-title"> Escribinos </p>
   
                {isMobile ? 
                    <div className="email-div"> 
                        <div className="email">
                        <a href="mailto:gerardomalteses@gmail.com"> <MailIcon/>  </a>
                        </div>
                 </div>
                :
                    <div className="email-div"> 
                        <div className="email">
                        <TextModal className={"email-modal"} text={"gerardomalteses@gmail.com"}  icon={"mail"}  /> 
                        <p className="email-big"> gerardomalteses@gmail.com  </p>
    
                    </div>
                </div>
                }  

            </div>



        <CustomerChat />
   

    </div>
    </div>
    )

}






export default RightColumn
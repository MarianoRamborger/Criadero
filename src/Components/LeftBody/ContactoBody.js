import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailIcon from '@material-ui/icons/Mail';
// import NewsCard from '../NewsCard/NewsCard'



const ContactoBody = () => {

    return (
        <div className="left-column-container" >
            <div className="left-column">

            <h2 className="font-color"> Podes encontrarnos en...</h2>

            <div className="fb-links-div"> 
                <div className="fb-links">
                    <a href="https://www.facebook.com/Maltes-Copos-de-Nieve-Criadero-351312871715721/" className="fb-icon" target="blank"> <FacebookIcon /> </a> 
                    <a href="https://www.facebook.com/maltescoposdenieve.criadero/" className="fb-icon" target="blank">  <FacebookIcon /> </a> 
                    <a href="https://www.facebook.com/Copito-De-Seda-331569503965709/" className="fb-icon" target="blank"> <FacebookIcon /> </a>   
                    </div>
                </div>
            
                <h2 className="font-color" > O llamarnos al...</h2>
                <div className="phone-div"> 
                <div className="phone-number">
                <p className="phone-number-p"> <PhoneInTalkIcon/>  XXXXXXXX </p>
                </div>
                </div>
            

                <h2 className="font-color" > O enviarnos un mail a...</h2>
                <div className="email-div"> 
                <div className="email">
                <h3 className="email-h3"> <MailIcon/>  XXXXX@XXX </h3>
                </div>
            </div>
    
            </div>
        </div>
    )


}


export default ContactoBody
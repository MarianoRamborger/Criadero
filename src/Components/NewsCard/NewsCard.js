import React from 'react'
import {SpringModal} from '../Modal/Modal'


const NewsCard = (props) => {

    //ImageArray debería mandar un array de objetos con la estructura [{ image, alt, style, y style siempre debería ser tiny pic}]

return (

    <div className="news-card-div">

    
    <div className="news-card-text-div">
        <h3 className="news-card-title"> {props.title} </h3>
        <p className="news-card-text"> {props.text} </p>
        <div className="multi-image-flex-column">
        {   
            props.imageArray ?
            props.imageArray.map(pic => {
                console.log(pic.fullScreenClassName)
            return <SpringModal image={pic.image} alt={pic.alt} className={pic.className} id={pic.id} fullScreenClassName={pic.fullScreenClassName} key={pic.id || (Math.random() * 100 + Math.random() * 1000)}/> 
        })
            : null
        }
        </div>
    </div>

    {props.image ? 
        <div className="news-card-image">
        <SpringModal image={props.image} alt={props.alt} className={props.className} fullScreenClassName={props.fullScreenClassName}  key={props.id || (Math.random() * 100 + Math.random() * 1000)} /> 
        </div>
        :
        null
    }


    
  



    </div>

)


}

export default NewsCard
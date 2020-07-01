import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import pic1 from '../../Images/Dogs/news1.jpg'
import multidemo1 from '../../Images/DemoMultiImagen/multidemo1.jpg'
import multidemo2 from '../../Images/DemoMultiImagen/multidemo2.jpg'
import multidemo3 from '../../Images/DemoMultiImagen/multidemo3.jpg'



const NewsBody  = () => {

    return (
        <div className="left-column-container" >
        <div className="left-column news-column">
        
        <NewsCard 
            title={"Estrenamos página!"}
            id={"12"}
            text={"texto de relleno!"}
            image={pic1}
            imageAlt={"Perro celebrando"}
            className={"single-news-pic contrast"}

            
        />
 
        <NewsCard 
            title={"Muchas imagenes en una sola noticia!"}
            text={"Es posible! clickealas para agrandarlas!"}
            imageArray = {[
                {
                    image: multidemo1,
                    alt: "multidemo 1",
                    className : "news-card-multi-image contrast"
                 },
                 {
                    image: multidemo2, alt: "multidemo 2", className: "news-card-multi-image contrast",  id:"14"
                 }
                 ,
                 {
                    image: multidemo3, alt: "multidemo 3", className: "news-card-multi-image contrast", id:"15"
                 }
            ]}
    
        />
 
      
    
        </div>
        </div>
    )

}


export default NewsBody
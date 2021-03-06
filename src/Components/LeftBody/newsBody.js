import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import pic1 from '../../Images/Dogs/news1.jpg'
import multidemo2 from '../../Images/DemoMultiImagen/multidemo2.jpg'
import multidemo3 from '../../Images/DemoMultiImagen/multidemo3.jpg'

import n1 from '../../Images/Nacimientos/1.JPG'
import n2 from '../../Images/Nacimientos/2.JPG'
import n3 from '../../Images/Nacimientos/3.JPG'
import n4 from '../../Images/Nacimientos/4.JPG'
import n5 from '../../Images/Nacimientos/5.JPG'


const NewsBody  = () => {

    return (
        <div className="left-column-container" >
        <div className="left-column news-column">
        
        <NewsCard 
            title={"15/7/2020 -- Estamos de nacimiento!"}
            text={"Recién nacidos!"}
            imageArray = {[
                {
                    image: n1,
                    alt: "cachorro neonato",
                    className : "news-card-multi-image-medium hoverEffect image-normalizer",
                    fullScreenClassName: "full-screen-big"
                
                 },
                 {
                    image: n2, alt: "cachorro neonato", className: "news-card-multi-image-medium hoverEffect image-normalizer",  id:"14", fullScreenClassName: "full-screen-big"
                 }
                 ,
                 {
                    image: n3, alt: "cachorro neonato", className: "news-card-multi-image-medium hoverEffect image-normalizer", id:"15", fullScreenClassName: "full-screen-big"
                 },
                 {
                    image: n4, alt: "cachorro neonato", className: "news-card-multi-image-medium hoverEffect image-normalizer", id:"16", fullScreenClassName: "full-screen-big"
                 },
                 {
                    image: n5, alt: "cachorro neonato", className: "news-card-multi-image-medium hoverEffect image-normalizer", id:"17", fullScreenClassName: "full-screen-big"
                 }
            ]}
    
        />
 


{/* 

        <NewsCard 
            title={"Estrenamos página!"}
            id={"12"}
            text={"Proximamente"}
            image={pic1}
            imageAlt={"Perro celebrando"}
            className={"single-news-pic contrast"}

            
        /> */}
 
        <NewsCard 
            title={"15/7/2020 - Estrenamos pagina."}
            text={"Y lo celebramos con vos!"}
            imageArray = {[
                {
                    image: pic1,
                    alt: "multidemo 1",
                    className : "news-card-multi-image hoverEffect  image-normalizer"
                 },
                 {
                    image: multidemo2, alt: "multidemo 2", className: "news-card-multi-image  hoverEffect image-normalizer",  id:"14"
                 }
                 ,
                 {
                    image: multidemo3, alt: "multidemo 3", className: "news-card-multi-image hoverEffect image-normalizer", id:"15"
                 }
            ]}
    
        />
 
      
    
        </div>
        </div>
    )

}


export default NewsBody
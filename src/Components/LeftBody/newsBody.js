import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import pic1 from '../../Images/Dogs/news1.jpg'

const LeftBody  = () => {

    return (
        <div className="left-column news-column">
        
        <NewsCard 
            title={"Estrenamos página!"}
            text={"texto de relleno!"}
            mainImage={pic1}
            mainImageAlt={"Perro celebrando"}
        />

    
        </div>
    )

}


export default LeftBody
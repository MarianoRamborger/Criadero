import React from 'react'


const NewsCard = (props) => {

return (

    <div className="news-card-div">

    <div className="news-card-text-div">
        <h3 className="news-card-title"> {props.title} </h3>
        <p className="news-card-text"> {props.text} </p>
    </div>

    <div className="news-card-image">
        <img src={props.mainImage} alt={props.mainImageAlt} /> 
    </div>
  



    </div>

)


}

export default NewsCard
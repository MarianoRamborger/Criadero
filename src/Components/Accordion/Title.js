import React from 'react'
import Snowfall from 'react-snowfall'


const Title = () => {

    return (
       <div className="accordion-title">
         <Snowfall 
           color="#FFF5F5"
            style={{ height: "100%" , color: "snow"}}
            snowflakeCount={20} /> 
            <h1 >Criadero Copos de Nieve</h1>
        </div>
    )


}

export default Title
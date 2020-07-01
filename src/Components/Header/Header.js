import React from 'react'
import Navbar from './Navbar'

const Header = (props) => {
    
    const {sectionState, changeSectionState} = props;


    return (
        <div className="header-div">
    
           
            <div className="title-div">
            <h1>      Criadero "Copos de Nieve"  </h1>   
            </div>
            <Navbar sectionState={sectionState} changeSectionState={changeSectionState}/>
          
          
        </div>
    )


}



export default Header
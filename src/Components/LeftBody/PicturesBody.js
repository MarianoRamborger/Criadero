import React, {useState} from 'react'
import pics from './ImageLoader'
import { SpringModal } from '../Modal/Modal'


const PicturesBody = () => {

const [displayNumber, displayMore] = useState(3)

const handleDisplayMore = () => { console.log(pics.length); console.log(pics.length / displayNumber); displayNumber > 0 ? displayMore(displayNumber - 1) : displayMore(1)  }

    return (
        <div className="left-column-container" >
            <div className="left-column fotos-div">
            
            {

                pics.map((pic, index) => {

                    if (index <= pics.length / displayNumber) {

                       return <SpringModal image={pics[index]} alt={"foto"}  key={index} fullScreenClassName={"full-screen-control"} className={"fotos-section-pic image-normalizer"} />
                    }
                    else return null

                })

            }

        
                

           <div className="load-more-button">      
                <button onClick={handleDisplayMore}> Más fotos!   </button> 
           </div>
            </div>
            
        </div>

    )

}


export default PicturesBody
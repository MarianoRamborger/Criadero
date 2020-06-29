import React from 'react'
import pic1 from '../../Images/DemoMultiImagen/multidemo1.jpg'
import pic2 from '../../Images/DemoMultiImagen/multidemo2.jpg'
import pic3 from '../../Images/DemoMultiImagen/multidemo3.jpg'
import pic4 from '../../Images/DemoMultiImagen/multidemo4.jpg'
import pic5 from '../../Images/DemoMultiImagen/multidemomain.jpg'
import pic6 from '../../Images/Sections/Fotos.jpg'
import pic7 from '../../Images/Sections/Novedades.jpg'
import pic8 from '../../Images/Sections/verdeContacto.jpg'
import pic9 from '../../Images/Sections/verdeNosotros.jpg'
import { SpringModal } from '../Modal/Modal'


const PicturesBody = () => {

    return (
        <div className="left-column-container" >
            <div className="left-column fotos-div">
            
                <SpringModal image={pic1} alt={"foto"} className={"fotos-section-pic contrast"} />
                <SpringModal image={pic2} alt={"foto"} className={"fotos-section-pic contrast"} />
                <SpringModal image={pic3} alt={"foto"} className={"fotos-section-pic contrast"} />
                <SpringModal image={pic4} alt={"foto"} className={"fotos-section-pic contrast"} />
                <SpringModal image={pic5} alt={"foto"} className={"fotos-section-pic contrast"} />
                <SpringModal image={pic6} alt={"foto"} className={"fotos-section-pic contrast"} />
                <SpringModal image={pic7} alt={"foto"} className={"fotos-section-pic contrast"} />
                <SpringModal image={pic8} alt={"foto"} className={"fotos-section-pic contrast"} />      
                <SpringModal image={pic9} alt={"foto"} className={"fotos-section-pic contrast"} />  
                
            </div>
        </div>

    )

}


export default PicturesBody
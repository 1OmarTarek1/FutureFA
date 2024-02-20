import { SecSectionWrapper } from '../../Components'
import MaPhoto from '../../Assets/Images/MapPhoto.jpg'

import './Map.css'
import { FaMapLocation } from 'react-icons/fa6';




const Map = () => {
    let title = <>
        Place
        <FaMapLocation style={{marginRight:"20px"}}/>
    </>;
    return (
        <>
            <div className="Map-Section" id='location'>
                    <SecSectionWrapper secHeader={title}>
                        <div className="mapImgWrapper">
                            <a target='_blank' rel='noreferrer' href="https://maps.app.goo.gl/qRLMsyV9Kh1PL4MX9" >
                                <img className='mapIMg img-fluid' src={MaPhoto} alt="موقع التدريب" />
                            </a>
                        </div>
                    </SecSectionWrapper>
            </div>
        </>
    )
}

export default Map
import { MDBCarousel, MDBCarouselItem  } from 'mdb-react-ui-kit';
// MDBCarouselCaption

import image_01 from '../../Assets/Images/slide-1.jpg'
import image_02 from '../../Assets/Images/slide-2.jpg'
import image_03 from '../../Assets/Images/slide-3.jpg'
import image_04 from '../../Assets/Images/slide-4.jpg'
import image_05 from '../../Assets/Images/slide-5.jpg'

import './HomeCarousel.css'

const HomeCarousel = () => {
    return (
        <>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem itemId={1}>
                    <img 
                    src={image_01} 
                    className='homeImage d-block w-100' 
                    alt='...' />
                    {/* <MDBCarouselCaption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselCaption> */}
                </MDBCarouselItem>

                <MDBCarouselItem itemId={2}>
                    <img 
                    src={image_02} 
                    className='homeImage d-block w-100' 
                    alt='...' />
                    {/* <MDBCarouselCaption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselCaption> */}
                </MDBCarouselItem>

                <MDBCarouselItem itemId={3}>
                    <img 
                    src={image_03} 
                    className='homeImage d-block w-100' 
                    alt='...' />
                    {/* <MDBCarouselCaption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption> */}
                </MDBCarouselItem>
                
                <MDBCarouselItem itemId={4}>
                    <img 
                    src={image_04} 
                    className='homeImage d-block w-100' 
                    alt='...' />
                    {/* <MDBCarouselCaption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption> */}
                </MDBCarouselItem>

                <MDBCarouselItem itemId={5}>
                    <img 
                    src={image_05} 
                    className='homeImage d-block w-100' 
                    alt='...' />
                    {/* <MDBCarouselCaption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption> */}
                </MDBCarouselItem>

            </MDBCarousel>
        </>
    )
}

export default HomeCarousel
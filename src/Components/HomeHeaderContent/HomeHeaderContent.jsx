import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

import Logo     from '../../Assets/Images/logo.png'

import './HomeHeaderContent.css'



const HomeHeaderContent = () => {
    return (
        <>
            {/* EFFECT IS HERE !!! */}
            <div className="colorEffect">
                <div className="HeaderContent">

                    <div className="HeaderIcn">
                        <img className='' src={Logo} alt="Logo" width="" height=""/>
                    </div>

                    <div className="HeaderTxt">
                        <div className="HeaderTitle mt-5 mb-5">
                            <h2>FUTURE ACADEMY</h2>
                        </div>
                        <p className='text-white-50'>
                            معا لنصنع افضل اللاعبين
                        </p>
                    </div>

                    <MDBBtn 
                    tag={Link} 
                    to='/Contact' 
                    size='md' 
                    color='warning' 
                    >
                        اشترك الان
                    </MDBBtn>
                    
                </div>
            </div> 
        </>
    )
}

export default HomeHeaderContent
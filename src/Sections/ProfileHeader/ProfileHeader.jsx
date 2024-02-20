import { MDBIcon } from 'mdb-react-ui-kit';

import profileCover from '../../Assets/Images/Team2009.jpg'
import profileImg from '../../Assets/Images/profile.jpg'
import './ProfileHeader.css'




const ProfileHeader = () => {
    return (
        <div className='ProfileHeader-Section'>
            <div className="coverWrapper">
                <img src={profileCover} alt="ProfileCover" className='profileCover img-fluid' />
            </div>
            <div className="info">
                <div className='profileItems'>
                    <img src={profileImg} alt="Profile" className='profileImg img-fluid' />

                    <div className="profText">
                        <span className='profileName'>
                            عمر طارق
                        </span>
                        <span className='profileDes'>
                            الافضل عبر التاريخ
                        </span>
                    </div>

                </div>
                <div className="userMedia" style={{paddingLeft:"35px"}}>
                    <a href='#!' className='text-reset' style={{marginInline:"10px"}}>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='#!' className='text-reset' style={{marginInline:"10px"}}>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='#!' className='text-reset' style={{marginInline:"10px"}}>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='#!' className='text-reset' style={{marginInline:"10px"}}>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='#!' className='text-reset' style={{marginInline:"10px"}}>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='#!' className='text-reset' style={{marginInline:"10px"}}>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader
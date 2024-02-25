
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
import profileImg from '../../Assets/Images/profile.jpg'
import './ProfileLink.css'





const ProfileLink = () => {
    return (
        <>
        <div className="profile d-flex" style={{position:"relative"}}>


            <div className="profileLink d-none" >
                <NavLink className="navLink" to="/Profile" style={{width:"unset"}}>
                    <div className="profileImg">
                        <img src={profileImg} alt="Profile Img" className="pImage" width={30} />
                    </div>
                </NavLink>
            </div>


            <div className="loginLin " style={{position:"relative",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}>
                <div className="navLink" style={{width:"unset"}}>
                    <FaUserCircle style={{fontSize:"30px",cursor:"pointer"}} />
                </div>
            </div>


        </div>
        </>
    )
}

export default ProfileLink
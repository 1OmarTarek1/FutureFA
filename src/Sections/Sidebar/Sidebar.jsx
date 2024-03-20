import { SidebarBtn, WebTheme } from '../../Components'
import { HashLink } from 'react-router-hash-link';
import profileImg from '../../Assets/Images/profile.jpg'

import { 
    FaHome,
    FaNewspaper,
    FaRunning,
    FaUserPlus,
    } from 'react-icons/fa';
import { FaArrowRightFromBracket,
    FaGear,
    FaRegCircleQuestion,
    FaCircleInfo,
    } from "react-icons/fa6";

import './Sidebar.css'
import { useEffect } from 'react';







const Sidebar = () => {
    useEffect(() => {
        let checkbox = document.querySelector(".checkSide");
        let sideLinks = document.querySelectorAll(".sidebarLink");
        const handleClickSide = () => {
            checkbox.checked=false
        };

        sideLinks.forEach( sideLink => {
            sideLink.addEventListener( 'click', handleClickSide )
        });

        return () => {
            sideLinks.forEach(sideLink => {
                sideLink.removeEventListener( 'click', handleClickSide )
            })
        }
    });

    return (
        <>
            <div className="Sidebar-Section">
                <div className="Sidebar"> <SidebarBtn />
                    <div className="sidebar-content">

                        <div className="sidebarHeader">
                            <HashLink to="/Profile" className='sidebarLink sideProfile'>
                                <div className="photo">
                                    <img className='' src={profileImg} alt="profile" />
                                </div>
                                <div className="profileTxt">
                                    <div className="name">عمر طارق</div>
                                    <p className="description" style={{fontSize:"12px"}}>الافضل عبر التاريخ</p>
                                </div>
                            </HashLink>
                        </div>

                        <ul className="sidebarBody">
                            <li>
                                <HashLink to="/" className="sidebarLink sideBodyLink">
                                    <FaHome />
                                    <span>
                                        الرئيسية
                                    </span>
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="/#SomeNews" className="sidebarLink sideBodyLink">
                                    <FaNewspaper />
                                    <span>
                                        الاخبار الحصرية
                                    </span>
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="/Training#TrainingTime" className="sidebarLink sideBodyLink">
                                    <FaRunning />
                                    <span>
                                        مواعيد التدريب
                                    </span>
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="/Contact#SubscribePlans" className="sidebarLink sideBodyLink">
                                    <FaUserPlus />
                                    <span>
                                        الاشتراكات
                                    </span>
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="/Else/About" className="sidebarLink sideBodyLink">
                                    <FaCircleInfo />
                                    <span>
                                        من نحن
                                    </span>
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="#!" className="sidebarLink sideBodyLink">
                                <FaGear />
                                    <span>
                                        الاعدادات
                                    </span>
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="#!" className="sidebarLink sideBodyLink">
                                    <FaRegCircleQuestion  />
                                    <span>
                                        المساعدة
                                    </span>
                                </HashLink>
                            </li>
                        </ul>

                        <div className="sidebarFooter">
                            <div className="footerLink">
                                <HashLink to="#!" className="sidebarLink sideBodyLink footerLink">
                                    <FaArrowRightFromBracket />
                                    <span>
                                        الخروج
                                    </span>
                                </HashLink>
                            </div>
                            <WebTheme />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidebar
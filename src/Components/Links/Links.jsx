import { NavLink } from 'react-router-dom';
import { Search, SecLinks } from '../../Components';
import { FaHome, FaNewspaper, FaRunning, FaCaretSquareDown, FaCommentAlt } from 'react-icons/fa'

import './Links.css'



const Links = ( { active, setActive, setActiveSearch } ) => {
    return (
        <>
        <ul className= { active ? "navLinks openNavbar" : "navLinks" }>
            <li className="navLi">
                <NavLink className="catchNavLink navLink" to="/">
                    <FaHome />
                    <span>
                        الرئيسية
                    </span>
                </NavLink>
            </li>
            <li className="navLi">
                <NavLink className="catchNavLink navLink" to="/News">
                    <FaNewspaper />
                    <span>
                        الاخبار 
                    </span>
                </NavLink>
            </li>
            <li className="navLi">
                <NavLink className="catchNavLink navLink" to="/Training">
                    <FaRunning style={{transform:"scale(1.2)"}} />
                    <span>
                        التدريب 
                    </span>
                </NavLink>
            </li>
            <li className="navLi dropdownLinks">
                <NavLink  to={"/Else"} className="navLink">
                    <FaCaretSquareDown />
                    <span>
                        اخري
                    </span>
                </NavLink>
                <SecLinks />
            </li>
            <li className="navLi">
                <NavLink className="catchNavLink navLink" to="/Contact">
                    <FaCommentAlt />
                    <span>
                        تواصل
                    </span>
                </NavLink>
            </li>
            <li className="navLi navLiSearch">
                <Search 
                idKey           ={"mobileSearch"} 
                active          ={active}
                setActive       ={setActive} 
                setActiveSearch ={setActiveSearch} 
                /> 
            </li>
        </ul>
        </>
    )

}

export default Links
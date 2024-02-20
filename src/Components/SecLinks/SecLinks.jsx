import { NavLink } from 'react-router-dom';
import { FaFlag, FaInfoCircle } from 'react-icons/fa'
import { ThirdLink } from '..';

import './SecLinks.css'

const SecLinks = () => {
    return (
        <>
        <div className="secondLinks">
            <ul className="secondUl">
                <li className="navLi Teams d-flex ">
                    <NavLink to="/Else/Teams"  className="navLink">
                        <FaFlag />
                        <span>
                            الفرق
                        </span>
                    </NavLink>
                    <ThirdLink />

                </li>
                <li className="navLi">
                <NavLink to="/Else/About" className="catchNavLink navLink">
                        <FaInfoCircle />
                        <span>
                            من نحن
                        </span>
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default SecLinks
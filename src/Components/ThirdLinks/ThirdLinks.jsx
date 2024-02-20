
import { NavLink } from 'react-router-dom'
import './ThirdLinks.css'


const ThirdLinks = () => {
    return (
        <>
            <div className="ThirdLinks">
                <ul className="ThirdUl">
                    <li className="navLi">
                        <NavLink to="/Else/Teams/Team2009" className="catchNavLink navLink">
                            <span>
                                2009
                            </span>
                        </NavLink>
                    </li>
                    <li className="navLi">
                        <NavLink to="/Else/Teams/Team2011" className="catchNavLink navLink">
                            <span>
                            2011
                            </span>
                        </NavLink>
                    </li>
                    <li className="navLi">
                        <NavLink to="/Else/Teams/Team2013" className="catchNavLink navLink">
                            <span>
                            2013
                            </span>
                        </NavLink>
                    </li>
                    <li className="navLi">
                        <NavLink to="/Else/Teams/Team2015" className="catchNavLink navLink">
                            <span>
                            2015
                            </span>
                        </NavLink>
                    </li>
                    <li className="navLi">
                        <NavLink to="/Else/Teams/Team2017" className="catchNavLink navLink">
                            <span>
                            2017
                            </span>
                        </NavLink>
                    </li>
                    <li className="navLi">
                        <NavLink to="/Else/Teams/Team2019" className="catchNavLink navLink">
                            <span>
                            2019
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ThirdLinks
import { useEffect, useState } from 'react';
import Headroom from 'react-headroom';
import { NavLink } from 'react-router-dom';


import { NavBtn, Links, ProfileLink, Search } from '../../Components'
import logo from '../../Assets/Images/logo.png'

import './Navbar.css'




const Navbar = () => {
    const [ active, setActive ] = useState( false )
    const [ activeSearch, setActiveSearch ] = useState(false);


    useEffect( () => {
        let NavLinks = document.querySelectorAll(".catchNavLink")
        const handleCloseNav = () => {setActive(!active);};
        NavLinks.forEach( navLink => {
            navLink.addEventListener( 'click', handleCloseNav);
        });
        // CleanUp
        return () => {
            NavLinks.forEach( navLink => {
                navLink.removeEventListener( 'click', handleCloseNav );
            });
        }
    }, [ active ])
    
    return ( 
        <>
            <div className='nav-navbar'>
            <Headroom>
                <div className="nav-container">  <NavBtn active={active} setActive={setActive} />

                    <div className="logoWrapper d-flex align-items-center gap-2">
                        <NavLink className="" to="/">
                            <div className="logo">
                                <img src={logo} alt="Future Academy" className="logoImg" width={50} />
                            </div>
                        </NavLink>
                        {/* <Search 
                        idKey           ={"pcSearch"} 
                        setActive       ={setActive} 
                        activeSearch    ={activeSearch} 
                        setActiveSearch ={setActiveSearch}/> */}
                    </div>

                    <Links active={active} setActive={setActive} setActiveSearch={setActiveSearch}/>
                    
                    <div className='leftWrapper d-flex gap-3'>
                        <Search 
                            idKey           ={"pcSearch"} 
                            setActive       ={setActive} 
                            activeSearch    ={activeSearch} 
                            setActiveSearch ={setActiveSearch}
                        />
                        <ProfileLink />
                    </div>

                </div>
                </Headroom>
            </div>
        </>
    )

}

export default Navbar
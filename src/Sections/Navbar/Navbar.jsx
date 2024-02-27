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
        return () => {
            NavLinks.forEach( navLink => {
                navLink.removeEventListener( 'click', handleCloseNav );
            });
        }
    }, [ active ])


    // open Login Form
    useEffect( () => {
        let formCatch = document.querySelector(".UserAccount-Section");
        let formIcn = document.querySelector(".formIcn");
        const handelForm = () => {  
            formCatch.classList.add("openUserForm");
        };
        formIcn.addEventListener('click', handelForm );
        return () => {
            formIcn.removeEventListener('click', handelForm );
        }
        
    });
    
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
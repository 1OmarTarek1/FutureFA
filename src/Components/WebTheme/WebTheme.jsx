
import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link'
import { FaCircleHalfStroke } from 'react-icons/fa6'
import { FaMoon } from 'react-icons/fa'
import './WebTheme.css'


const WebTheme = () => {

    const [ activeTheme, setActiveTheme ] = useState()
    const [ activeCircle, setActiveCircle ] = useState()
    const selectedTheme = localStorage.getItem("selectedTheme");

    const setDarkMode = () => {
        document.documentElement.querySelector("body").setAttribute('data-theme', 'dark');
        localStorage.setItem("selectedTheme", "dark");
    };
    const setLightMode = () => {
        document.documentElement.querySelector("body").setAttribute('data-theme', 'light') ;
        localStorage.setItem("selectedTheme", "light");
    };
    useEffect( () => {    
        if( selectedTheme === "light"){
            setLightMode()
            setActiveTheme(true)
            setActiveCircle(true)            
        }
        else{
            setActiveTheme(false)
            setActiveCircle(false)            
        }
    }, [ activeCircle, activeTheme, selectedTheme ]);
    const toggleTheme = ( e ) => {
        if ( e.target.checked ) {
            setLightMode()
            setActiveTheme(true)
            setActiveCircle(true)
        }
        else {
            setDarkMode()
            setActiveTheme(false)
            setActiveCircle(false)            
        };
    };

    return (
        <>
        <div className="footerLink d-flex" style={{position:"relative"}}>
            <HashLink 
            to="#!" 
            className="sidebarLink sideBodyLink footerLink" 
            style={{flex:"1"}}
            >
                <FaCircleHalfStroke />
                <span>
                    الوضع
                </span>
            </HashLink>
            <div className="checkItem">
                <label htmlFor="themeCheckBox" className='themeLabel'>
                    <FaMoon />
                </label>
                <input 
                type="checkbox" 
                className='themeCheckBox'
                name='themeCheckBox' 
                id="themeCheckBox" 
                onChange={toggleTheme}
                defaultChecked = { selectedTheme === "light" }
                />
            </div>
        </div>
        </>
    )
}

export default WebTheme
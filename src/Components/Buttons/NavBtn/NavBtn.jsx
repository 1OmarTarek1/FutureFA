import React, { useEffect } from 'react'
import './NavBtn.css'

const NavBtn = ( {active, setActive} ) => {
    
    useEffect( () => {
        let handleClick = () => { setActive( !active ) }
        let navBtn = document.querySelector(".linksBtn")
        navBtn.addEventListener( 'click', handleClick )
        // Clean Up
        return () => { navBtn.removeEventListener( 'click', handleClick ) };
    }, [active, setActive] )

    return (
        <>
            <div className={ active ? "linksBtn BtnAnimation" : "linksBtn " }>
                    <span className="BtnLine"></span>
                    <span className="BtnLine"></span>
                    <span className="BtnLine"></span>
            </div>
        </>
    )
}

export default NavBtn
import { useEffect } from 'react'
import logo from '../../Assets/Images/logo.png'
import './OpenWebEffect.css'




const OpenWebEffect = () => {
    useEffect(()=>{
        let effect = document.querySelector(".OpenWebEffect");
        setTimeout(() => {
            effect.style.opacity="0";
            effect.style.visibility="hidden";
        }, 2000);
    })
    return (
        <>
        <div className="OpenWebEffect">
            <img className='LogoAnimation' src={logo} alt="Logo" />
        </div>
        </>
    )
}

export default OpenWebEffect
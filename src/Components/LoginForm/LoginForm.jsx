import { FaRegEnvelope } from 'react-icons/fa6';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './LoginForm.css'



const LoginForm = () => { // activeLabel
    const [ emailInput, setEmailInput ] = useState("")
    const [ passInput, setPassInput ] = useState("")
    const [ passEye, setPassEye ] = useState(false)

    const handleChangeEmail = (e) => {
        setEmailInput(e.target.value)
    };
    const handleChangePass = (e) => {
        setPassInput(e.target.value)
    };
    let handleEye = (e) => {
        setPassEye(!passEye)
        let password = document.querySelector(".password")
        if( passEye ){
            password.type = 'password'
        }
        else{
            password.type = 'text'
        }
    }

    useEffect(() => {
        // Email Login
        let emailLabel = document.querySelector(".emailLabel")
        if( emailInput ){
            emailLabel.classList.add("activeLabel")
        }
        else{
            emailLabel.classList.remove("activeLabel")
        }
        // Password Login
        let passLabel = document.querySelector(".passLabel")
        if( passInput ){
            passLabel.classList.add("activeLabel")
        }
        else{
            passLabel.classList.remove("activeLabel")
        }
    })
    return (
        <>
            <div className="formStyle LoginForm">
                <div className="formHeader">
                    <div className="formTitle">
                        Login
                    </div>
                </div>
                <form className='TheForm' action="">
                    <div className="inputElement emailElement">
                        <label className='inputLabel emailLabel' htmlFor="emailID">Email Address</label>
                        <input 
                        type="email" 
                        className="theInput email" 
                        id="emailID" 
                        value={emailInput} 
                        onChange={handleChangeEmail}
                        />
                        <FaRegEnvelope className='inputIcn'/>
                    </div>

                    <div className="inputElement passElement">
                        <label className='inputLabel passLabel' htmlFor="passID">Password</label>
                        <input 
                        type="password" 
                        className="theInput password" 
                        id="passID" 
                        value={passInput} 
                        onChange={handleChangePass} 
                        />
                            <i 
                            className={ passEye 
                                ?'inputIcn eyeIcn fa-regular fa-eye'
                                :'inputIcn eyeIcn fa-regular fa-eye-slash'
                            } 
                            style={{
                            cursor:"pointer", 
                            transform: "translateY(-50%) scale(.8)",
                            }}
                            onClick={handleEye}
                            />
                    </div>


                    <div className="checkInfo">
                        <div className="theCheck">
                            <input type="checkbox" className="saveCheck" id="saveCheckID" style={{marginRight:"5px"}}/>
                            <label htmlFor="saveCheckID">Save Password</label>
                        </div>
                        <Link to={"#!"} className="forgetLink">Forget Password ?</Link>
                    </div>

                    <MDBBtn
                    tag='input' 
                    type='submit' 
                    value='Login'
                    size='lg' 
                    color='warning'
                    style={{borderRadius:"5px"}}
                    />  


                    <div className="registerLink w-100 text-center">
                        <span>Don't have an account ? </span>
                        <Link to={"#!"} className="signUpLink">Register</Link>
                    </div>

                </form>
            </div>
        </>
    )
}

export default LoginForm
import { FaRegEnvelope } from 'react-icons/fa6'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBBtn } from 'mdb-react-ui-kit'
import './SignUpForm.css'


const SignUpForm = () => {
    const [ passEye, setPassEye ] = useState(false)

    let handleEye = (e) => {
        setPassEye(!passEye)
        let passwords = document.querySelectorAll(".password-signUp")
        passwords.forEach(password => {
            if( passEye ){
                password.type = 'password'
            }
            else{
                password.type = 'text'
            }
        })
    }


    return (
        <>
        <div className="formStyle SignUpForm">
            <div className="formHeader">
                <div className="formTitle">
                    SignUP
                </div>
            </div>
            <form className='TheForm' action="">

                <div className="nameWrapper">
                    <div className="inputElement emailElement">
                        <input 
                        type="text" 
                        className="theInput email email-signUp" 
                        id="F-name" 
                        placeholder='First Name'
                        />
                    </div>
                    <div className="inputElement emailElement">
                        <input 
                        type="text" 
                        className="theInput email email-signUp" 
                        id="L-name" 
                        placeholder='Last Name'
                        />
                    </div>
                </div>

                <div className="inputElement emailElement">
                    <input 
                    type="email" 
                    className="theInput email email-signUp" 
                    id="emailID-sign" 
                    placeholder='Email Address'
                    />
                    <FaRegEnvelope className='inputIcn'/>
                </div>

                <div className="inputElement passElement">
                    <input 
                    type="password" 
                    className="theInput password password-signUp" 
                    id="passID-sign" 
                    placeholder='Password'
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
                <div className="inputElement passElement">
                    <input 
                    type="password" 
                    className="theInput password password-signUp" 
                    id="passID-sign-confirm" 
                    placeholder='Confirm Password'
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
                        <input type="checkbox" className="saveCheck" defaultChecked="checked" id="saveCheckID-sign" style={{marginRight:"5px"}}/>
                        <label htmlFor="saveCheckID-sign">Agree Our Terms</label>
                    </div>
                    <MDBBtn tag={"input"} type='reset' outline color='warning' size='sm' value='Reset'/>
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
                    <Link to={"#!"} className="haveAccount">Already have account</Link>
                </div>

            </form>
        </div>
        </>
    )
}

export default SignUpForm
import { FaPhone, FaRegEnvelope, FaRegUser } from 'react-icons/fa6'
import { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import './ForgetPassForm.css'







const ForgetPassForm = () => {
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
        <div className='formStyle ForgetPassForm'>
        <div className="formHeader">
                    <div className="formTitle">
                        Get Pass
                    </div>
                </div>
                <form className='TheForm' action="">


                    <div className="inputElement userName">
                        <input 
                        type="text" 
                        className="theInput userNameInput" 
                        id="userName" 
                        placeholder='Username'
                        autoComplete='true'
                        />
                        <FaRegUser className='inputIcn'/>
                    </div>

                    <div className="inputElement phoneNumber">
                        <input 
                        type="text" 
                        className="theInput userNameInput" 
                        id="phoneNumber" 
                        placeholder='Phone Number'
                        autoComplete='true'
                        />
                        <FaPhone className='inputIcn' />
                    </div>

                    <div className="inputElement emailElement">
                        <input 
                        type="email" 
                        className="theInput email email-signUp" 
                        id="forget-emailID-sign" 
                        placeholder='Email Address'
                        />
                        <FaRegEnvelope className='inputIcn'/>
                    </div>

                    <div className="inputElement passElement">
                        <input 
                        type="password" 
                        className="theInput password password-signUp" 
                        id="forget-passID-sign" 
                        placeholder='Last Password You Remember'
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
                            <input type="checkbox" className="saveCheck" defaultChecked="checked" id="forget-saveCheckID-sign" style={{marginRight:"5px"}}/>
                            <label htmlFor="saveCheckID-sign">Agree Our Terms</label>
                        </div>
                        <MDBBtn tag={"input"} type='reset' outline color='warning' size='sm' value='Reset'/>
                    </div>

                    <MDBBtn
                    tag='input' 
                    type='submit' 
                    value='Submit'
                    size='lg' 
                    color='warning'
                    style={{borderRadius:"5px"}}
                    />  


                    <div className="registerLink w-100 text-center">
                        <div className="backToLogin">Back To Login</div>
                    </div>

                </form>
        </div>
        </>
    )
}

export default ForgetPassForm
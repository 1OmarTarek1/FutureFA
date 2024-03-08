import { useEffect, useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { ForgetPassForm, LoginForm, SignUpForm } from '../../Components'

import './UserAccount.css'
import './FormStyle.css'








const UserAccount = () => {
    const [openForm, setOpenForm] = useState(false)
    const handelForm = () => {
        setOpenForm(!openForm)
    }

    useEffect(()=>{
        let registerLink = document.querySelector(".signUpLink")
        let SignUpForm = document.querySelector(".SignUpForm")
        let LoginForm = document.querySelector(".LoginForm")
        const handelClickSignUp = () => {
            LoginForm.style.visibility = "hidden"
            LoginForm.style.opacity = "0"
            SignUpForm.style.visibility = "visible"
            SignUpForm.style.opacity = "1"
        }
        registerLink.addEventListener( 'click', handelClickSignUp )
        return () => {
            registerLink.removeEventListener( 'click', handelClickSignUp )
        }
    })

    useEffect(()=>{
        let backToLoginLink = document.querySelector(".backToLogin")
        let ForgetPassForm = document.querySelector(".ForgetPassForm")
        let LoginForm = document.querySelector(".LoginForm")
        const handelClickSignUp = () => {
            LoginForm.style.visibility = "visible"
            LoginForm.style.opacity = "1"
            ForgetPassForm.style.visibility = "hidden"
            ForgetPassForm.style.opacity = "0"
        }
        backToLoginLink.addEventListener( 'click', handelClickSignUp )
        return () => {
            backToLoginLink.removeEventListener( 'click', handelClickSignUp )
        }
    })

    useEffect(()=>{
        let haveAccount = document.querySelector(".haveAccount")
        let SignUpForm = document.querySelector(".SignUpForm")
        let LoginForm = document.querySelector(".LoginForm")
        const handelClickSignUp = () => {
            LoginForm.style.visibility = "visible"
            LoginForm.style.opacity = "1"
            SignUpForm.style.visibility = "hidden"
            SignUpForm.style.opacity = "0"
        }
        haveAccount.addEventListener( 'click', handelClickSignUp )
        return () => {
            haveAccount.removeEventListener( 'click', handelClickSignUp )
        }
    })

    useEffect(()=>{
        let forgetLink = document.querySelector(".forgetLink")
        let ForgetPassForm = document.querySelector(".ForgetPassForm")
        let LoginForm = document.querySelector(".LoginForm")
        const handelClickSignUp = () => {
            LoginForm.style.visibility = "hidden"
            LoginForm.style.opacity = "0"
            ForgetPassForm.style.visibility = "visible"
            ForgetPassForm.style.opacity = "1"
        }
        forgetLink.addEventListener( 'click', handelClickSignUp )
        return () => {
            forgetLink.removeEventListener( 'click', handelClickSignUp )
        }
    })
    return (
        <>
            <div className={ openForm ?
                "UserAccount-Section closeUserForm" 
                : "UserAccount-Section"
                }>
                <FaXmark className='X-close' onClick={handelForm}/>
                <div className="FormsWrapper">
                    <LoginForm />
                    <SignUpForm />
                    <ForgetPassForm />
                </div>
            </div>
        </>
    )
}

export default UserAccount
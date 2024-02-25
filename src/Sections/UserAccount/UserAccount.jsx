import { FaXmark } from 'react-icons/fa6'
import { LoginForm, SignUpForm } from '../../Components'

import './UserAccount.css'
import { useEffect } from 'react'








const UserAccount = () => {
    return (
        <>
            <div className="UserAccount-Section">
                <FaXmark className='X-close'/>
                <div className="FormsWrapper">
                    <LoginForm />
                    <SignUpForm />
                </div>
            </div>
        </>
    )
}

export default UserAccount
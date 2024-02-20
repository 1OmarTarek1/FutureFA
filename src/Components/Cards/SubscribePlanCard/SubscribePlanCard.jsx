import { useEffect } from 'react'


import { MDBBtn } from 'mdb-react-ui-kit'
import { FaRunning, FaCheck } from 'react-icons/fa'
import './SubscribePlanCard.css'




const SubscribePlanCard = ( props ) => {

    useEffect(() => {
        let plans = document.querySelectorAll(".SubscribePlanCard");
        plans.forEach( plan => {
            plan.addEventListener('click', () => {
                let activeP = document.querySelector(".activePlan");
                activeP.classList.remove("activePlan");
                plan.classList.add("activePlan");
            })
        })

        return (
            plans.forEach( plan => {
                plan.removeEventListener('click', () => {
                    let activeP = document.querySelector(".activePlan");
                    activeP.classList.remove("activePlan");
                    plan.classList.add("activePlan");
                })
            })
        )
    })
    return (
        <>
            <div className={props.clsName}>
                <div className="subHeader">
                    {props.headTitle}
                </div>                
                <div className="bodyTitle">
                    {props.bodyTitle}
                </div>

                <ul className="bodyContent">
                    <li className="planUlItem">
                        <div className='planIcn'>
                            <FaCheck />
                        </div>
                        <div className='ItemContent'>
                            <span className='contentIcn'>
                                <FaRunning />
                            </span>
                            <span>
                                {props.training}
                            </span>
                        </div>
                    </li>
                    {props.tShirt}
                    {props.trophy}                    
                </ul>

                <MDBBtn outline color='warning'>
                    اشترك الان
                </MDBBtn>
            </div>
        </>
    )
}

export default SubscribePlanCard
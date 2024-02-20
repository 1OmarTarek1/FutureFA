import { FaCheck, FaTrophy, FaXmark } from 'react-icons/fa6'
import { FaTshirt } from 'react-icons/fa'

let trainingMonth =
    <span>
        12 حصة تدريبية
    </span>;
let trainingTxtHalfMonth =
    <span>
        6 حصة تدريبية
    </span>;


let tShirtTxt =
    <>
        <li className="planUlItem">
            <div className='planIcn'>
                <FaCheck />
            </div>
            <div className='ItemContent'>
                <span className='contentIcn'>
                    <FaTshirt />
                </span>
                <span>
                    طقم كورة فيوتشر 
                    ( تيشرت - شورت - شراب )
                    300EGP
                </span>
            </div>
        </li>
    </>
let tShirtTxtDeleted =
    <>
    <li className="planUlItem">
        <div className='planIcn planIcnDel'>
            <FaXmark />
        </div>

        <del className="ItemContent">
            <span className='contentIcn'>
                <FaTshirt />
            </span>
            <span>
                طقم كورة فيوتشر 
                ( تيشرت - شورت - شراب )
                300EGP
            </span>
        </del>
    </li>
    </>;


let trophyTxt =
    <>
    <li className="planUlItem">
        <div className='planIcn'>
            <FaCheck />
        </div>
        <div className='ItemContent'>
            <span className='contentIcn'>
                <FaTrophy />
            </span>
            <span>
                المشاركة بالبطولة الحالية 
                750EGP
            </span>
        </div>
    </li> 
    </>;
let trophyTxtDeleted =
    <>
    <li className="planUlItem">
        <div className='planIcn planIcnDel'>
            <FaXmark />
        </div>

        <del className="ItemContent">
            <span className='contentIcn'>
                <FaTrophy />
            </span>
            <span>
                المشاركة بالبطولة الحالية 
                750EGP
            </span>
        </del>
    </li>
    </>;




const SubscribePlanData = [

    { // Plan-02
        id        : "Plan-02",
        clsName   : "SubscribePlanCard lessUsed",
        headTitle : "الاقل استخداما",
        bodyTitle : "300EGP",
        training  : trainingTxtHalfMonth,
        tShirt    : tShirtTxtDeleted,
        trophy    : trophyTxtDeleted,
        planPath  : "",
    },
    

    { // Plan-01
        id        : "Plan-01",
        clsName   : "SubscribePlanCard mostUsed activePlan",
        headTitle : "الاكثر استخداما",
        bodyTitle : "500EGP",
        training  : trainingMonth,
        tShirt    : tShirtTxtDeleted,
        trophy    : trophyTxtDeleted,
        planPath  : "",
    },

    
    { // Plan-03
        id        : "Plan-03",
        clsName   : "SubscribePlanCard thinkAbout",
        headTitle : "نقترح عليك",
        bodyTitle : "800EGP",
        training  : trainingMonth,
        tShirt    : tShirtTxt,
        trophy    : trophyTxtDeleted,
        planPath  : "",
    },


    { // Plan-04
        id        : "Plan-04",
        clsName   : "SubscribePlanCard thinkAbout mostCoast",
        headTitle : "نقترح عليك",
        bodyTitle : "1550EGP",
        training  : trainingMonth,
        tShirt    : tShirtTxt,
        trophy    : trophyTxt,
        planPath  : "",
    },

]

export default SubscribePlanData
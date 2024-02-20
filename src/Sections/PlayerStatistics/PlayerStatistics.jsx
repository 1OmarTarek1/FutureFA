import { 
    FaChartLine, 
    FaCheck, 
    FaCopyright, 
    FaFlagCheckered, 
    FaFutbol , 
    FaMagic, 
    FaMedal, 
    FaRunning, 
    FaStar, 
    FaTrophy, 
    FaTshirt 
} from 'react-icons/fa'
import { FaDumbbell } from 'react-icons/fa6'

import './PlayerStatistics.css'




const PlayerStatistics = () => {
    return (
        <div className='PlayerStatistics'>
            <div className="StatisticBox">
                <ul className="detailsList">
                    <li className="detailsItem">
                        <span className="liText">
                            <FaTshirt />
                            دفندر
                        </span>
                        <span className='C-Wrapper'>
                            <FaCopyright />
                        </span>
                        <span className="liText">
                            6
                        </span>
                    </li>
                    <li className="detailsItem">
                        <span className="liText">
                            <FaStar />
                            افضل لاعب
                        </span>
                        <span className="liText">
                            <FaCheck />
                        </span>
                    </li>
                    <li className="detailsItem">
                        <span className="liText">
                            <FaFutbol />
                            الاهداف
                        </span>
                        <span className="liText">
                            99
                        </span>
                    </li>
                    <li className="detailsItem">
                        <span className="liText">
                            <FaMagic />
                            صناعة العاب
                        </span>
                        <span className="liText">
                            99
                        </span>
                    </li>
                </ul>
            </div>
            <div className="StatisticBox">
                <ul className="detailsList">
                    <li className="detailsItem">
                        <span className="liText">
                            <FaChartLine />  
                            معدل التهديف
                        </span>
                        <span className="liText">
                            99.9%
                        </span>
                    </li>
                    <li className="detailsItem">
                        <span className="liText">
                            <FaChartLine />
                            نسبة التمريرات الصحيحة
                        </span>
                        <span className="liText">
                            99%
                        </span>
                    </li>
                    <li className="detailsItem">
                        <span className="liText">
                            <FaChartLine />
                            نسبة التسديدات علي المرمي
                        </span>
                        <span className="liText">
                            99%
                        </span>
                    </li>
                    <li className="detailsItem">
                        <span className="liText">
                            <FaRunning />   
                            القوة البدنية
                        </span>
                        <span className="liText">
                            99%
                        </span>
                    </li>
                </ul>
            </div>
            <div className="StatisticBox">
                <ul className="detailsList">
                    <li className="detailsItem">
                        <span className="liText">
                            <FaDumbbell />
                            القوة الجسمانية
                        </span>
                        <span className="liText">
                            99%
                        </span>
                    </li>
                    <li className="detailsItem">
                        <span className="liText">
                            <FaTrophy />
                            البطولات الجماعية
                        </span>
                        <span className="liText">
                            3
                        </span>
                    </li>
                    <li className="detailsItem">
                        <span className="liText">
                            <FaMedal />
                            البطولات الفردية
                        </span>
                        <span className="liText">
                            16
                        </span>
                    </li>
                    <li className="detailsItem">
                        <span className="liText">
                            <FaFlagCheckered />
                            البطولة الحالية
                        </span>
                        <span className="liText">
                            FPL
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PlayerStatistics
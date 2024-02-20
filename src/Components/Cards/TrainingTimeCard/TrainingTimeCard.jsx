
import { Link } from 'react-router-dom'
import { MDBBtn } from 'mdb-react-ui-kit'
import { FaFlag, FaRegCalendarDays, FaRegHandPointLeft } from 'react-icons/fa6'
import './TrainingTimeCard.css'





const TrainingTimeCard = ( props ) => {
    return (
        <>
            <li className="TrainingTimeCard" id={props.LocationInPage}>
                
                <div className="firstSide">
                    <div className="imgWrapper">
                        <img className='img-fluid' src={props.groupImg} alt="Team_Cover" />
                    </div>
                    <div className="imgTitle">
                        <div className="groupNumber">
                            {props.title}
                        </div>
                        <p className="groupDis">
                            {props.description}
                        </p>
                    </div>
                </div>

                <div className="centerSide">
                    <div className="trainingDays">
                        <FaRegCalendarDays />
                        <span>
                            {props.TimeDate}
                        </span>
                    </div>
                    <div className="trainingDays">
                        <FaRegHandPointLeft />
                        <span>
                            {props.note}
                        </span>
                    </div>
                </div>

                <div className="lastSide">
                    <MDBBtn 
                    tag={Link} 
                    to={props.pagePath} 
                    size='lg' 
                    color='warning' 
                    >
                        <FaFlag />
                    </MDBBtn>
                </div>

            </li>
        </>
    )
}

export default TrainingTimeCard
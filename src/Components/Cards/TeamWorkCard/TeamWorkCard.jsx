import { MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import './TeamWorkCard.css'








const TeamWorkCard = ( props ) => {
    return (
    <>
        <div className='TeamWorkCard'>
            <div className="details">
                <div className="coachName">
                    {props.name}
                </div>
                <div className="coachTitle">
                    {props.title}
                </div>
                <div className="coachAbout">
                    <p>{props.paragraph}</p>
                </div>
                <MDBBtn outline tag={Link} to={props.pageLocation} color='warning' className='mt-3'>
                    المزيد
                </MDBBtn>
            </div>
            <img src={props.image} alt="Coach" className='CoachImg '/>
        </div>
    </>
    )
}

export default TeamWorkCard
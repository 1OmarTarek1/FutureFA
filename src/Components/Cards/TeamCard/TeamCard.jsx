
import { MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { FaFlag } from 'react-icons/fa'

import './TeamCard.css'






const TeamCard = ( props ) => {
    return (
        <>
        <div className='TeamCard'>

            <img src={props.image} alt="Team Cover" className="teamImg img-fluid" />

            {/* <div className="TeamTitle">
                {props.title}
            </div> */}

            <div className="cardContent">
                <div className="contentTitle">
                    <span className="teamWord">
                        فريق
                    </span>
                    <span>
                        {props.title}
                    </span>
                </div>

                <ul className="cardList">
                    <li className="ListItem">
                        <div className="minTitle">
                            البطولات
                        </div>
                        <div className="desc">
                            {props.tournaments}
                        </div>
                    </li>
                    <li className="ListItem">
                        <div className="minTitle">
                            المشارك بها
                        </div>
                        <div className="desc">
                            {props.played}
                        </div>
                    </li>
                    <li className="ListItem">
                        <div className="minTitle">
                            الحالية
                        </div>
                        <div className="desc">
                            {props.thisTournament}
                        </div>
                    </li>
                </ul>

                <MDBBtn outline tag={Link} to={props.pagePath} color='warning' className='' >
                    <FaFlag />
                </MDBBtn>
            </div>

        </div>
        </>
    )
}

export default TeamCard

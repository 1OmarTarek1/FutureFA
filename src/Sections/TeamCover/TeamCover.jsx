// import cover from '../../Assets/Images/Team2009.jpg'
// import {  } from '../../Components'

import './TeamCover.css'





const TeamCover = ( props ) => {
    return (
        <>
            <div className="TeamCover-Section" id='TeamHeader'>
                <div className="ImageCover">
                    <img src={props.image} alt="Cover" className="coverPhoto img-fluid" />
                </div>
                <div className="teamTitle">
                    <span>
                        {props.pageTitle}
                    </span>
                </div>
            </div>
        </>
    )
}

export default TeamCover
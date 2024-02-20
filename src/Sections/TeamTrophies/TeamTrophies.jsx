import trophy from '../../Assets/Images/trophy-01.png'
import medal from '../../Assets/Images/medal.png'
import tournament from '../../Assets/Images/currentTrophy.png'

import './TeamTrophies.css'





const TeamTrophies = ( props ) => {
    return (
        <>
            <div className="TeamTrophies" id='TeamTournaments'>

                <div className="trophyItem">
                    <img src={medal} alt="" className='secImg img-fluid'/>
                    <span>{props.played}</span>
                </div>

                <div className="trophyItem">
                    <img src={trophy} alt="" className='secImg img-fluid' />
                    <span>{props.tournaments}</span>
                </div>

                <div className="trophyItem">
                    <img src={tournament} alt="" className='secImg img-fluid'/>
                    <span>{props.thisTournament}</span>
                </div>

            </div>
        </>
    )
}

export default TeamTrophies
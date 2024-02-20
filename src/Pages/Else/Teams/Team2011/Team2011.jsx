import { TeamCover, TeamTrophies } from '../../../../Sections'
import { MainContainer } from '../../../../Components'
import Main from '../Main-Css/Main'
import MainTeamsData from '../../../../Data/MainTeamsData'

import '../Main-Css/Main.css'
import './Team2011.css'
import MainHeader from '../Main-Css/MainHeader'


const Team2011 = () => {
    const covers = MainTeamsData[1]
    return (
        <>
        <div className="Team-Page Team2011-Page">
            <MainContainer>
                <MainHeader />
                <TeamCover 
                image     = { covers.image     }
                pageTitle = { covers.pageTitle }
                />
                <TeamTrophies 
                tournaments     = { covers.tournaments    }
                played          = { covers.played         }
                thisTournament  = { covers.thisTournament }
                />
                <Main activePlan={"tab2"} />
            </MainContainer>
        </div>
        </>
    )
}

export default Team2011
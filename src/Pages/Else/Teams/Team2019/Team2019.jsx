import { TeamCover, TeamTrophies } from '../../../../Sections'
import { MainContainer } from '../../../../Components'
import Main from '../Main-Css/Main'
import MainTeamsData from '../../../../Data/MainTeamsData'

import '../Main-Css/Main.css'
import './Team2019.css'
import MainHeader from '../Main-Css/MainHeader'


const Team2019 = () => {
    const covers = MainTeamsData[5]
    return (
        <>
        <div className="Team-Page Team2019-Page">
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
                <Main activePlan={"tab1"} />
            </MainContainer>
        </div>
        </>
    )
}

export default Team2019
import { TeamCover, TeamPlay, TeamTrophies } from '../../../../Sections'
import { MainContainer } from '../../../../Components'
import Main from "../Main-Css/Main";
import MainTeamsData from '../../../../Data/MainTeamsData'

import '../Main-Css/Main.css'
import './Team2009.css'
import MainHeader from '../Main-Css/MainHeader';


const Team2009 = () => {
    const covers = MainTeamsData[0]
    return (
        <>
        <div className="Team-Page Team2009-Page">
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
                <TeamPlay />
                <Main activePlan={"tab2"}/>
            </MainContainer>
        </div>
        </>
    )
}

export default Team2009
import { SecSectionWrapper, TeamCard } from '../../Components'
import TeamCardData from '../../Data/TeamCardData'


import './Teams.css'





const Teams = () => {
    const cards = TeamCardData.map( card => {
        return <TeamCard key={card.id}
        image           = { card.image          }
        title           = { card.title          }
        description     = { card.description    }
        tournaments     = { card.tournaments    }
        played          = { card.played         }
        thisTournament  = { card.thisTournament }
        paragraph       = { card.paragraph      }
        LocationInPage  = { card.LocationInPage }
        pagePath        = { card.pagePath       }
        />
    })
    return (
        <>
            <div className="Teams-Section" id='Teams'>
                <SecSectionWrapper secHeader={"Teams"}>
                    <div className="TeamsCards">
                        {cards}
                    </div>
                </SecSectionWrapper>
            </div>
        </>
    )
}

export default Teams
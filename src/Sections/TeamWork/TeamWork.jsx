import { TeamWorkCard } from '../../Components'
import TeamWorkData from '../../Data/TeamWorkData'
import './TeamWork.css'







const TeamWork = () => {
    const cards = TeamWorkData.map( card => {
        return <TeamWorkCard key={card.id}
        id              ={ card.id             }
        pageLocation    ={ card.pageLocation   }
        locationInPage  ={ card.locationInPage }
        image           ={ card.image          }
        name            ={ card.name           }
        title           ={ card.title          }
        description     ={ card.description    }
        paragraph       ={ card.paragraph      }
        />
    })
    return (
        <>
            <div className="TeamWork-section" id='Coaches'>
                <div className="TeamWork-cards">
                    {cards}
                    <div className="coachesHeadTitle">
                        <span>Coaches</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamWork
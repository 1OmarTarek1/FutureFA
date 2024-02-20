import { Link } from 'react-router-dom'
import { MDBBtn } from 'mdb-react-ui-kit'
import { SectionHeader, SectionWrapper, TrainingTimeCard } from '../../Components'
import TrainingTimeData from '../../Data/TrainingTimeData'
import './TrainingTime.css'




const TrainingTime = () => {

    const cards = TrainingTimeData.map( card => {
        return <TrainingTimeCard key={ card.id }
        pagePath       = { card.pagePath       }
        LocationInPage = { card.LocationInPage }
        groupImg       = { card.image          }
        title          = { card.title          }
        description    = { card.description    }
        TimeDate       = { card.TimeDate       }
        note           = { card.note           }
        />
    })

    return (
        <>
            <div className="TrainingTime-section" id='TrainingTime'>
                <SectionWrapper>
                    
                    <SectionHeader>
                        مواعيد التدريب
                    </SectionHeader>
                    
                    <ul className="TrainingTimeCards">
                        {cards}
                    </ul>

                    <MDBBtn 
                    tag={Link} 
                    to='/Training' 
                    size='md' 
                    color='warning' 
                    style={{borderRadius:"0",fontWeight:"400",position:"absolute",left:"50%",
                    transform:"translate(-50%, -50%)",top:"100%"}}>
                        التدريب
                    </MDBBtn>

                </SectionWrapper>
            </div>
        </>
    )
}

export default TrainingTime
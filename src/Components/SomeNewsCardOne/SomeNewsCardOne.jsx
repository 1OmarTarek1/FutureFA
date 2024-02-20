
import { TeamsNewsCard } from '../'
import TeamsNewsCardData from '../../Data/TeamsNewsCardData'
import './SomeNewsCardOne.css'




const SomeNewsCardOne = () => {
    const cards = TeamsNewsCardData.map( card => {
        // if ( card.id === "TeamsNewsCard_01"){
            return <TeamsNewsCard key={ card.id }
            id       = { card.id        }
            image    = { card.image     }
            title    = { card.title     }
            para     = { card.paragraph }
            morePath = { card.morePath  }
            pagePath = { card.pagePath  }
            />
        // }
        // else return <></>
    })
    return (
        <>
            {cards[0]}
        </>
    )
}

export default SomeNewsCardOne
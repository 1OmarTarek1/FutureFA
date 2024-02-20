
import { PlayersGoCard } from '../'
import PlayersGoCardData from '../../Data/PlayersGoCardData'
import './SomeNewsCardTwo.css'



const SomeNewsCardTwo = () => {
    const cards = PlayersGoCardData.map( card => {
        // if ( card.id === "PlayersGoCard_01"){
            return <PlayersGoCard key={ card.id }
            id       = { card.id        }
            img      = { card.image     }
            name     = { card.name      }
            para     = { card.paragraph }
            LocPage  = { card.LocPage   }
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

export default SomeNewsCardTwo
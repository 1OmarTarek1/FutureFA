import { SectionHeader, SectionWrapper, TeamsNewsCard } from '../../Components'
import TeamsNewsCardData from '../../Data/TeamsNewsCardData'
import './TeamsNews.css'






const TeamsNews = () => {
    const cards = TeamsNewsCardData.map( card => {
        return <TeamsNewsCard key={ card.id }
        id       = { card.id        }
        image    = { card.image     }
        title    = { card.title     }
        para     = { card.paragraph }
        morePath = { card.morePath  }
        pagePath = { card.pagePath  }
        />
    })

    return (
    <>
    <div className="TeamsNews" id='TeamsNews'>
        <SectionHeader>
            اخبار الفرق
        </SectionHeader>

        <SectionWrapper>
        <div className='TeamsNewsCards'>
            { cards }
        </div>
        </SectionWrapper>

    </div>
    </>
    )
}

export default TeamsNews
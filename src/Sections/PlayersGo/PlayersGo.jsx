import Slider from 'react-slick'
import { PlayersGoCard, SecSectionWrapper } from '../../Components'
import PlayersGoCardData from '../../Data/PlayersGoCardData'
import './PlayersGo.css'







const PlayersGo = () => {

    const cards = PlayersGoCardData.map( card => {
        return <PlayersGoCard key={ card.id }
        id       = { card.id             }
        img      = { card.image          }
        name     = { card.name           }
        para     = { card.paragraph      }
        LocP     = { card.LocationInPage }
        pagePath = { card.pagePath       }
        morePath = { card.morePath       }
        />
    })

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        pauseOnHover: true,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="PlayersGo" id='Deals'>
                <SecSectionWrapper secHeader={"Deals"}>
                    <div className="PlayersGoCards">
                        <Slider {...settings} >
                            {cards}
                        </Slider>
                    </div>
                </SecSectionWrapper>

            </div>
        </>
    )
}

export default PlayersGo
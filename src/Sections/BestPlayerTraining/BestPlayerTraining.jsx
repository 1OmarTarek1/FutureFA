import Slider from 'react-slick'
import { BestPlayerTrainingCard, SecSectionWrapper } from '../../Components'
import BestPlayerTrainingData from '../../Data/BestPlayerTrainingData'
import './BestPlayerTraining.css'







const BestPlayerTraining = () => {

    const cards = BestPlayerTrainingData.map( card => {
        return <BestPlayerTrainingCard key={ card.id }
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
        slidesToShow: 3,
        slidesToScroll: 1,
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
            <div className="PlayersGo" id='BestPlayer'>
                <SecSectionWrapper secHeader={"The Best"}>
                    <div className="BestPlayerTrainingCards">
                        <Slider {...settings} >
                            {cards}
                        </Slider>
                    </div>
                </SecSectionWrapper>

            </div>
        </>
    )
}

export default BestPlayerTraining
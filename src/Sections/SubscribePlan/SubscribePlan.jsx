import Slider from 'react-slick'
import SubscribePlanData from '../../Data/SubscribePlanData'
import { SecSectionWrapper } from '../../Components'
import SubscribePlanCard from '../../Components/Cards/SubscribePlanCard/SubscribePlanCard'
import './SubscribePlan.css'






const SubscribePlan = () => {

    const cards = SubscribePlanData.map( card => {
        return <SubscribePlanCard key={card.id}
        clsName   = { card.clsName   }
        headTitle = { card.headTitle }
        bodyTitle = { card.bodyTitle }
        training  = { card.training  }
        tShirt    = { card.tShirt    }
        trophy    = { card.trophy    }
        planPath  = { card.planPath  }
        />
    })

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        currentSlide:0,
        // rtl:true,
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
                breakpoint: 650,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="SubscribePlan-Section"id='SubscribePlans'>
                <SecSectionWrapper secHeader={"Subscribe"}>
                    <div className="SubscribePlanCards">
                    <Slider {...settings} >
                        {cards}
                    </Slider>
                    </div>
                </SecSectionWrapper>
            </div>
        </>
    )
}

export default SubscribePlan
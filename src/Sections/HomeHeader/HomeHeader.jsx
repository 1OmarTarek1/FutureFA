
import { HomeCarousel, HomeHeaderContent } from '../../Components';
import './HomeHeader.css'



const HomeHeader = () => {
    return (
        <>
        <div className="HomeHeader" id='HomeHeader' style={{position:"relative"}}>
            <HomeCarousel />
            <HomeHeaderContent />
        </div>
        </>
    )
}

export default HomeHeader
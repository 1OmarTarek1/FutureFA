import { Link } from 'react-router-dom';
import { MDBBtn } from "mdb-react-ui-kit"
import { SectionHeader, SectionWrapper, SomeNewsCardOne, SomeNewsCardTwo } from "../../Components"
import ImportantTitlesNews from "../ImportantTitlesNews/ImportantTitlesNews"
import { FaNewspaper } from "react-icons/fa"


import NewsCarousel from '../NewsCarousel/NewsCarousel';
import './SomeNews.css'




const SomeNews = () => {
    return (
        <>
        <div className="SomeNews-section" id='SomeNews'>
                <SectionWrapper>
                    <SectionHeader>
                        <FaNewspaper />
                        <span>
                            الاخبار الحصرية
                        </span>
                    </SectionHeader>

                    <div className="SomeNewsContainer">

                        <ImportantTitlesNews />

                        <div className="else">
                            <div className="elseItem else-top">
                                <NewsCarousel />
                            </div>

                            <div className="elseItem else-down">
                                <div className="newCard card-one">
                                    <SomeNewsCardOne />
                                </div>
                                
                                <div className="newCard card-two">
                                    <SomeNewsCardTwo />
                                </div>
                            </div>

                        </div>

                    </div>

                    <MDBBtn 
                    tag={Link} 
                    to='/News' 
                    size='md' 
                    color='warning' 
                    style={{borderRadius:"0",fontWeight:"400",position:"absolute",left:"50%",
                    transform:"translate(-50%, -50%)",top:"100%"}}>
                        المزيد
                    </MDBBtn>
                </SectionWrapper>
        </div>
        </>
    )
}

export default SomeNews
import { MainContainer } from "../../Components"
import { HomeHeader, SomeNews, TrainingTime, Teams, Map, SecNav } from "../../Sections"
import SecNavData from "../../Data/SecNavData"

import './Home.css'
import { HashLink } from "react-router-hash-link"


const Home = () => {
    const AllLinks = SecNavData.HomePage.map(LiLink => {
      return (
        <li key={LiLink.KeyID} >
            <HashLink to={LiLink.scrollTo} className="secNavLink">
                {LiLink.txt}
            </HashLink>
        </li>
      )
  })    
  return (
    <>
    <div className="Home-Page">
      <HomeHeader />
      <MainContainer>
        <SecNav AllLinks={AllLinks}/>
          <SomeNews />
          <Teams />
          <TrainingTime />
          <Map />
      </MainContainer>
    </div>
    </>
  )
}

export default Home
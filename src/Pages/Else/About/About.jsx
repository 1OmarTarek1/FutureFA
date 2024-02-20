import { HashLink } from 'react-router-hash-link'
import { PlayersGo, TeamWork, AboutAcademy, Map, SecNav } from '../../../Sections'
import { MainContainer, SectionWrapper } from '../../../Components'
import SecNavData from '../../../Data/SecNavData'

import './About.css'



const About = () => {
    const AllLinks = SecNavData.AboutPage.map(LiLink => {
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
      <div className="About-page">
        <MainContainer>
        <SecNav AllLinks={AllLinks}/>
          <AboutAcademy />
          <SectionWrapper>
            <TeamWork />
          </SectionWrapper>
          <PlayersGo />
          <Map />
        </MainContainer>
      </div>
    </>
  )
}

export default About
import { HashLink } from 'react-router-hash-link'
import { MainContainer, SectionWrapper } from '../../Components'
import SecNavData from '../../Data/SecNavData'
import { ContactUs, Map, SecNav, SubscribePlan, TeamWork, TrainingTime } from '../../Sections'

import './Contact.css'



const Contact = () => {
    const AllLinks = SecNavData.ContactPage.map(LiLink => {
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
      <div className="Contact-Page">
        <MainContainer>
          <SecNav AllLinks={AllLinks}/>
          <SubscribePlan />
          <ContactUs />
          <SectionWrapper> <TeamWork /> </SectionWrapper>
          <TrainingTime />
          <Map />
        </MainContainer>
      </div>
    </>
  )
}

export default Contact
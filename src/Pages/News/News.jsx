

import { MainContainer } from '../../Components'
import { ImportantTitlesNews, Map, NewsCarousel, PlayersGo, SecNav, TeamsNews, TrainingTime } from '../../Sections'
import SecNavData from '../../Data/SecNavData'
import './News.css'
import { HashLink } from 'react-router-hash-link'




const News = () => {
    const AllLinks = SecNavData.NewsPage.map(LiLink => {
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
    <div className="News-Page">
      <MainContainer>
      <SecNav AllLinks={AllLinks}/>
        <NewsCarousel />
        <ImportantTitlesNews />
        <TeamsNews />
        <PlayersGo />
        <TrainingTime />
        <Map />
      </MainContainer>
    </div>
    </>
  )
}

export default News
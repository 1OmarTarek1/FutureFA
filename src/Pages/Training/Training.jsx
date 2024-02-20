import { MainContainer } from '../../Components'
import { BestPlayerTraining, Map, SecNav, TeamWork, TrainingPlans, TrainingTime } from '../../Sections'
import SecNavData from '../../Data/SecNavData'
import './Training.css'
import { HashLink } from 'react-router-hash-link'



const Training = () => {
    const AllLinks = SecNavData.TrainingPage.map(LiLink => {
        return (
        <li key={LiLink.KeyID} >
            <HashLink to={LiLink.scrollTo} className="secNavLink">
                {LiLink.txt}
            </HashLink>
        </li>
        )
    })
    return (
        <div className='Training-page'>
            <MainContainer>
                <SecNav AllLinks={AllLinks}/>
                <TeamWork />
                <TrainingPlans MainActivePlan={"tab1"}/>
                <BestPlayerTraining />
                <TrainingTime />
                <Map />
            </MainContainer>
        </div>
    )
}

export default Training
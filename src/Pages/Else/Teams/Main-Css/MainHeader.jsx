import { HashLink } from "react-router-hash-link"
import { SecNav } from "../../../../Sections"
import SecNavData from "../../../../Data/SecNavData"




const MainHeader = () => {
    const AllLinks = SecNavData.TeamsPages.map(LiLink => {
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
            <SecNav AllLinks={AllLinks}/>
        </>
    )
}

export default MainHeader
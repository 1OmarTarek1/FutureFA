import mostGoals from '../../Assets/Images/goldenBoot.png'
import bestPlayer from '../../Assets/Images/bestPlayer.png'
import mostAssists from '../../Assets/Images/mostAssist.png'

import './PlayerTrophies.css'







const PlayerTrophies = () => {
    return (
        <>
            <div className="PlayerTrophies">
                <div className="PlayerItem">
                    <img src={mostGoals} alt="جائزة الهداف" className='trophyImg img-fluid'/>
                    <span>2</span>
                </div>

                <div className="PlayerItem">
                    <img src={bestPlayer} alt="جائزة افضل لاعب" className='trophyImg img-fluid' />
                    <span>1</span>
                </div>

                <div className="PlayerItem">
                    <img src={mostAssists} alt="جائزة الاكثر صناعة" className='trophyImg img-fluid'/>
                    <span>3</span>
                </div>
            </div>
        </>
    )
}

export default PlayerTrophies
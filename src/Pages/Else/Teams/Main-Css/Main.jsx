import { Map, TrainingPlans, TrainingTime } from '../../../../Sections'
import './Main.css'
// import { useLocation } from "react-router-dom";




const Main = ( {activePlan} ) => {




    return (
        <>
            <TrainingPlans MainActivePlan={activePlan} />
            <TrainingTime />
            <Map />
        </>
    )
}

export default Main
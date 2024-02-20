import './BestPlayerTrainingCard.css'






const BestPlayerTrainingCard = ( props ) => {
    return (
        <>
        <div className="BestPlayerTrainingCard">

            <div className="playerImg">
                <img className='' src={props.img} alt={props.name} />
            </div>

            <div className="playerName">
                {props.name}
            </div>


            <p className="playerParagraph">
                {props.para}
            </p>

        </div>
        </>
    )
}

export default BestPlayerTrainingCard
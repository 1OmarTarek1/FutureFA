import './PlayersGoCard.css'






const PlayersGoCard = ( props ) => {
    return (
        <>
        <div className="playersGoCard">

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

export default PlayersGoCard
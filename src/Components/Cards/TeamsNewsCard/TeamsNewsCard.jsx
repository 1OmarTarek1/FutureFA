
import { MDBBtn } from 'mdb-react-ui-kit';
import './TeamsNewsCard.css'





const TeamsNewsCard = ( props ) => {
    return (
        <>
            <div className="TeamsNewsCard">

                <div className="NewsCardImg">
                    <img src={props.image} alt="Team-Cover" />
                </div>

                <div className="NewsCardTitle">
                    {props.title}
                </div>


                <p className="NewsCardParagraph">
                    {props.para}
                </p>


                <MDBBtn outline color='warning'>
                    المزيد
                </MDBBtn>

            </div>
        </>
    )
}

export default TeamsNewsCard
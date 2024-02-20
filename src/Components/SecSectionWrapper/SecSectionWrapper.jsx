import './SecSectionWrapper.css'




const SecSectionWrapper = (props) => {
    return (
        <>
            <div className="SecSectionWrapper">
                <div className="SecSectionWrapperBody">
                    {props.children}
                </div>

                <div className="SecSectionWrapper-Header">
                    <span>
                        {props.secHeader}
                    </span>
                </div>
            </div>
        </>
    )
}

export default SecSectionWrapper
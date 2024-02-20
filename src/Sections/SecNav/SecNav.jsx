import './SecNav.css'






const SecNav = ( {AllLinks} ) => {
    return (
        <>
            <div className="SecNav">
                <ul className="linksContainer">
                    {AllLinks}
                </ul>
            </div>
        </>
    )
}

export default SecNav
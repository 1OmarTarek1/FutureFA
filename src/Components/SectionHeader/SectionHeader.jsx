import './SectionHeader.css'





const SectionHeader = ( props ) => {
    return (
        <>
            <div className="SectionHeader">
                {props.children}
            </div>
        </>
    )
}

export default SectionHeader
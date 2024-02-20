import { FaList } from 'react-icons/fa'
import './SidebarBtn.css'





const SidebarBtn = () => {
    return (
        <>
            <div className="SidebarBtn">
                <label htmlFor="sideCheck" className="sidebarIcon">
                    <FaList className='fa-rotate-180'/>
                </label>
                <input className='checkSide' type="checkbox" name="" id="sideCheck" />
            </div>
        </>
    )
}

export default SidebarBtn
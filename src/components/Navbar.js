import { useState } from "react"

const Navbar = ({ handleClick }) => {

    const [hover, setHover] = useState(false)


    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li><span className="nav-item">Home</span></li>

                <li id="services-link" onMouseEnter={() => {
                    setHover(true)
                }} onMouseLeave={() => {
                    setHover(false)
                }}>
                    <span className="nav-item">Services</span>
                    {hover ? <i className="fa-solid fa-caret-down" ></i> : <i className="fa-solid fa-caret-right"></i>}
                    <ul className={hover ? "services-list-show" : "services-list-hide"}>
                        <li> <span className="sub-nav-item">Deep Cleaning</span></li>
                        <li> <span className="sub-nav-item">Moving In/Out</span></li>
                        <li> <span className="sub-nav-item">Regular Maintenance</span></li>
                        <li> <span className="sub-nav-item">Commercial Cleaning</span></li>
                    </ul>
                </li>
                <li onClick={handleClick}><span className="nav-item">Gallery</span></li>
                <li><span className="nav-item">About</span></li>
                <li><span className="nav-item">Contact</span></li>
            </ul>
        </nav >
    )
}

export default Navbar
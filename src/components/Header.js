import logo from "../images/logo.png"
import bestInDestin from "../images/best_in_destin.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'



const Header = () => {

    const number = "1 - (850) 376-6774"
    const styles = {
        display: "flex"
    }

    return (
        <header className="header">
            <img className="logo" src={logo} />
            <div>
                <div className="header-number">

                    <span>{number}</span>
                </div>
                <div className="header-links">
                    {/* <a href="https://www.facebook.com/maidsinaction123/" target="_blank"><i class="fa-brands fa-facebook-square"></i></a> */}
                    <a href="tel:18503766774">
                        <div className="schedule-now-container">
                            <p className="schedule-now">SCHEDULE NOW</p>
                            <FontAwesomeIcon icon={faPhoneFlip} className="phone-icon schedule-now" />
                        </div>
                    </a>
                    {/* <a href="https://www.instagram.com/maidsinaction/" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a> */}
                </div>
            </div>
            <img className="bestindestin-img" src={bestInDestin} />
        </header >
    )
}

export default Header
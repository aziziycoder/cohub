import "./footer.scss"

import { FiPhone } from "react-icons/fi";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
    return (
        <footer>
            <div className="left">
                <h1 className="logo">Cohub</h1>
                <p>Modern IT & Language Education Center in Toshloq district</p>
            </div>
            <div className="center">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>   
            </div>
            <div className="right"> 
                <h3>Follow Us</h3>
                <div className="socials">
                    <a href="tel:+998996112404">
                        <FiPhone className="icon"/>
                    </a>
                    <a href="https://t.me/cohub_toshloq">
                        <RiTelegram2Fill className="icon"/>
                    </a>
                    <a href="https://www.instagram.com/cohub_toshloq/">
                        <FaInstagram className="icon"/>
                    </a>
                    <a href="">
                        <MdOutlineMail className="icon"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
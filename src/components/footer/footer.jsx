import "./footer.scss"
import { FiPhone } from "react-icons/fi";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer>
            <div className="left">
                <h1 className="logo">Cohub</h1>
                <p>{t.footer.tagline}</p>
            </div>
            <div className="center">
                <ul>
                    <li><a href="#">{t.nav.home}</a></li>
                    <li><a href="#about">{t.nav.about}</a></li>
                    <li><a href="#courses">{t.nav.courses}</a></li>
                    <li><a href="#contact">{t.nav.contact}</a></li>
                </ul>
            </div>
            <div className="right">
                <h3>{t.footer.followUs}</h3>
                <div className="socials">
                    <a href="tel:+998996112404"><FiPhone className="icon" /></a>
                    <a href="https://t.me/cohub_toshloq"><RiTelegram2Fill className="icon" /></a>
                    <a href="https://www.instagram.com/cohub_toshloq/"><FaInstagram className="icon" /></a>
                    <a href="mailto:cohub@gmail.com"><MdOutlineMail className="icon" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

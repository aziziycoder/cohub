import "./contact.scss";
import { FiPhone } from "react-icons/fi";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
    const { t } = useLanguage();
    return (
        <div className="contact" id="contact">
            <div className="top">
                <h1>Get In <code>Touch</code></h1>
                <p>{t.contact.subtitle}</p>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="social glass-bg">
                        <div><FiPhone className="icon" /></div>
                        <div>
                            <h3>{t.contact.phone}</h3>
                            <a href="tel:+998996112404">+998 99 611 24 04</a>
                        </div>
                    </div>
                    <div className="social glass-bg">
                        <div><RiTelegram2Fill className="icon" /></div>
                        <div>
                            <h3>{t.contact.telegram}</h3>
                            <a href="https://t.me/cohub_toshloq">@cohub_toshloq</a>
                        </div>
                    </div>
                    <div className="social glass-bg">
                        <div><FaInstagram className="icon" /></div>
                        <div>
                            <h3>{t.contact.instagram}</h3>
                            <a href="https://www.instagram.com/cohub_toshloq/">@cohub_toshloq</a>
                        </div>
                    </div>
                    <div className="social glass-bg">
                        <div><MdOutlineMail className="icon" /></div>
                        <div>
                            <h3>{t.contact.email}</h3>
                            <a href="mailto:cohub@gmail.com">cohub@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="right glass-bg">
                    <h2>{t.contact.quickEnroll}</h2>
                    <form onSubmit={(e) => { e.preventDefault(); window.open("https://forms.gle/eeuCWneQHodctjNg9", "_blank"); }}>
                        <div>
                            <label htmlFor="name">{t.contact.fullName}</label>
                            <input type="text" id="name" placeholder={t.contact.namePlaceholder} />
                        </div>
                        <div>
                            <label htmlFor="phone">{t.contact.phoneNumber}</label>
                            <input type="text" placeholder="+998 90 123 45 67" id="phone" />
                        </div>
                        <input type="submit" value={t.contact.submit} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;

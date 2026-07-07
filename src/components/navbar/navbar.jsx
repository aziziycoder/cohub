import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import "./navbar.scss"
import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
    const { lang, setLang, t } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (e, id) => {
        e.preventDefault();
        setMenuOpen(false);
        const element = document.getElementById(id);
        const offset = 150;
        const elementPos = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPos - offset, behavior: "smooth" });
    };

    const languages = ["uz", "en", "ru"];

    return (
        <>
            <nav className="glass-bg">
                <div className="left">
                    <div className="logo">
                        <h2><a href="#">Cohub</a></h2>
                    </div>
                </div>

                <div className="right">
                    <ul>
                        <li><a href="#" onClick={(e) => handleScroll(e, "home")}>{t.nav.home}</a></li>
                        <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>{t.nav.about}</a></li>
                        <li><a href="#courses" onClick={(e) => handleScroll(e, "courses")}>{t.nav.courses}</a></li>
                        <li><a href="#team" onClick={(e) => handleScroll(e, "team")}>{t.nav.team}</a></li>
                        <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>{t.nav.contact}</a></li>
                        <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>{t.nav.enroll}</a></li>
                    </ul>

                    <div className="lang-switcher">
                        {languages.map((l) => (
                            <button
                                key={l}
                                className={lang === l ? "active" : ""}
                                onClick={() => setLang(l)}
                            >
                                {l.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <button
                        className="burger-btn"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen
                            ? <IoCloseOutline className="burger" />
                            : <GiHamburgerMenu className="burger" />
                        }
                    </button>
                </div>
            </nav>

            {menuOpen && (
                <div className="mobile-menu glass-bg">
                    <ul>
                        <li><a href="#" onClick={(e) => handleScroll(e, "home")}>{t.nav.home}</a></li>
                        <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>{t.nav.about}</a></li>
                        <li><a href="#courses" onClick={(e) => handleScroll(e, "courses")}>{t.nav.courses}</a></li>
                        <li><a href="#team" onClick={(e) => handleScroll(e, "team")}>{t.nav.team}</a></li>
                        <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>{t.nav.contact}</a></li>
                        <li className="enroll-mobile"><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>{t.nav.enroll}</a></li>
                    </ul>
                    <div className="lang-switcher-mobile">
                        {languages.map((l) => (
                            <button
                                key={l}
                                className={lang === l ? "active" : ""}
                                onClick={() => setLang(l)}
                            >
                                {l.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;

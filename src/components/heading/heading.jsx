import "./heading.scss";
import Animation from "../head-animation/animation";
import { useLanguage } from "../../context/LanguageContext";

const Heading = () => {
    const { t } = useLanguage();
    return (
        <header id="home">
            <div className="left">
                <h1>{t.heading.titlePrefix}<code>{t.heading.titleHighlight}</code>{t.heading.titleSuffix}</h1>
                <p>{t.heading.subtitle}</p>
                <a href="#contact">{t.heading.cta}</a>
            </div>
            <div className="right">
                <Animation />
            </div>
        </header>
    )
}

export default Heading;

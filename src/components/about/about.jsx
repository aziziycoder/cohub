import "./about.scss"
import { PiStudentFill } from "react-icons/pi";
import { LuBookOpen } from "react-icons/lu";
import { FaPercent } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
    const { t } = useLanguage();
    return (
        <div className="about" id="about">
            <div className="container glass-bg">
                <div className="left">
                    <h1>About <code>Cohub</code></h1>
                    <p>{t.about.description}</p>
                </div>
                <div className="right">
                    <div className="card">
                        <PiStudentFill className="icon" />
                        <h2>150+</h2>
                        <p>{t.about.students}</p>
                    </div>
                    <div className="card">
                        <LuBookOpen className="icon" />
                        <h2>12</h2>
                        <p>{t.about.courses}</p>
                    </div>
                    <div className="card">
                        <FaPercent className="icon" />
                        <h2>90%</h2>
                        <p>{t.about.successRate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;

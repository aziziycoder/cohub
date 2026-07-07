import "./location.scss";
import { SlLocationPin } from "react-icons/sl";
import { useLanguage } from "../../context/LanguageContext";

const Location = () => {
    const { t } = useLanguage();
    return (
        <div className="location" id="location">
            <div className="top">
                <h1>Our <code>Location</code></h1>
            </div>

            <div className="bottom">
                <div className="left glass-bg">
                    <div className="heading">
                        <div><SlLocationPin /></div>
                        <div>
                            <h3>{t.location.visitUs}</h3>
                            <p>{t.location.address}</p>
                        </div>
                    </div>

                    <div className="info">
                        <p>{t.location.description}</p>
                        <a href="https://maps.app.goo.gl/PDUhfWADm2WvqnD67" target="_blank">
                            {t.location.directions}
                        </a>
                    </div>
                </div>

                <div className="right">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d389.73358599993526!2d71.75491705791393!3d40.48556496245721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1764951992121!5m2!1sen!2s"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Location;

import "./contact.scss";

import { FiPhone } from "react-icons/fi";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="contact">
            <div className="top">
                <h1>Get In <code>Touch</code></h1>
                <p>Ready to start your learning journey? Contact us today!</p>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="social glass-bg">
                        <div>
                            <FiPhone className="icon" />
                        </div>
                        <div>
                            <h3>Phone</h3>
                            <a href="tel:+998996112404">+998 99 611 24 04</a>
                        </div>
                    </div>
                    <div className="social glass-bg">
                        <div>
                            <RiTelegram2Fill className="icon" />
                        </div>
                        <div>
                            <h3>Telegram</h3>
                            <a href="https://t.me/cohub_toshloq">@cohub_toshloq</a>
                        </div>
                    </div>
                    <div className="social glass-bg">
                        <div>
                            <FaInstagram className="icon" />
                        </div>
                        <div>
                            <h3>Instagram</h3>
                            <a href="https://www.instagram.com/cohub_toshloq/">@cohub_toshloq</a>
                        </div>
                    </div>
                    <div className="social glass-bg">
                        <div>
                            <MdOutlineMail className="icon" />
                        </div>
                        <div>
                            <h3>Email</h3>
                            <a href="">cohub@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="right glass-bg">
                    <h2>Quick Enrollment</h2>
                    <form action="">
                        <div>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" placeholder="+998 90 123 45 67" id="phone" />
                        </div>
                        <input type="submit" value="Submit Enrollment" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
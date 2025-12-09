import "./about.scss"

import { PiStudentFill } from "react-icons/pi";
import { LuBookOpen } from "react-icons/lu";
import { FaPercent } from "react-icons/fa";

const About = () => {
    return(
        <div className="about" id="about">
            <div className="container glass-bg">
                <div className="left">
                    <h1>About <code>Cohub</code></h1>
                    <p>Cohub is a modern educational center located in Toshloq district, offering high-quality IT and language courses for both youth and adults. Our mission is to prepare students for future professions by building creativity, practical skills, and strong problem-solving abilities.</p>
                </div>
                <div className="right">
                    <div className="card">
                        <PiStudentFill className="icon" />
                        <h2>150+</h2>
                        <p>Enrolled Students</p>
                    </div>
                    <div className="card">
                        <LuBookOpen className="icon" />
                        <h2>12</h2>
                        <p>Available Courses</p>
                    </div>
                    <div className="card">
                        <FaPercent className="icon" />
                        <h2>90%</h2>
                        <p>Success Rate</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
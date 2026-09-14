import "./course.scss";
import { FaRegClock } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { useLanguage } from "../../context/LanguageContext";

const Course = ({ courses }) => {
    const { t } = useLanguage();
    return (
        <div className="courses" id="courses">
            <div className="top">
                <h1>Our <code>Courses</code></h1>
                <p>{t.courses.subtitle}</p>
            </div>
            <div className="bottom">
                {courses.map((course, index) => (
                    <div className="card glass-bg" key={index}>
                        <div className="icon">
                            <img src={course.icon} alt="" />
                        </div>
                        <div className="texts">
                            <h2>{course.title}</h2>
                            <p className="description">{course.description}</p>
                            <p className="duration"><FaRegClock />{course.duration}</p>
                            <p className="forwho"><IoPeopleOutline /> {course.forwho}</p>
                            <p className="topics-text"><IoBookOutline /> {t.courses.keyTopics}</p>
                            <ul className="topics">
                                {course.topics.map((topic, idx) => (
                                    <li key={idx} className="topic">{topic}</li>
                                ))}
                            </ul>
                        </div>
                        <a href="https://forms.gle/eeuCWneQHodctjNg9" target="_blank" rel="noopener noreferrer">{t.courses.enroll}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Course;

import "./course.scss";

import { FaRegClock } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";

const Course = ({ courses }) => {
    return(
        <div className="courses" id="courses">
            <div className="top">
                <h1>Our <code>Courses</code></h1>
                <p>Explore our comprehensive range of courses designed to equip you with future-ready skills</p>
            </div>
            <div className="bottom">
                {courses.map((course, index) => (
                    <div className="card glass-bg" key={index}>
                        <div className="icon">
                            <img src={course.icon} alt=""/>
                        </div>
                        <h2>{course.title}</h2>
                        <p className="description">{course.description}</p>
                        <p className="duration"><FaRegClock />{course.duration}</p>
                        <p className="forwho"><IoPeopleOutline /> {course.forwho}</p>
                        <p className="topics-text"><IoBookOutline /> Key Topics:</p>
                        <ul className="topics">
                            {course.topics.map((topic, idx) => (
                                <li key={idx} className="topic">{topic}</li>
                            ))} 
                        </ul>
                        <a href="">Enroll Now</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Course;
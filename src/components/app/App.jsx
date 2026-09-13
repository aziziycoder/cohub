import './App.css'

import Navbar from '../navbar/navbar'
import Heading from '../heading/heading'
import About from '../about/about'
import Course from '../courses/course'
import Team from '../team/team'
import Location from '../location/location'
import Contact from '../contact/contact'
import Footer from "../footer/footer"

import FaCode from "../../assets/icons/code.svg"
import LuPalette from "../../assets/icons/pallete.svg"
import FaComputer from "../../assets/icons/computer.svg"
import GrLanguage from "../../assets/icons/language.svg"

import Azizbek from "../../assets/team/azizbek.webp"
import Saidjon from "../../assets/team/saidjon.jpg"
import Aloxon from "../../assets/team/aloxon.png"
import Farzona from "../../assets/team/farzona.png"

import { useLanguage } from '../../context/LanguageContext'

const courseIcons = [FaCode, LuPalette, FaComputer, GrLanguage]
const teamImages = [Azizbek, Saidjon, Aloxon, Farzona]

function App() {
  const { t } = useLanguage()

  const coursesData = t.coursesData.map((course, i) => ({
    ...course,
    icon: courseIcons[i]
  }))

  const team = t.teamData.map((member, i) => ({
    ...member,
    img: teamImages[i] || null
  }))

  return (
    <div className='app'>
      <div className="main">
        <Navbar />
        <Heading />
        <About />
        <Course courses={coursesData} />
        <Team team={team} />
        <Location />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App

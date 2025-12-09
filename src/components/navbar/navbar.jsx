import "./navbar.scss"

const Navbar = () => {

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);

        const offset = 150; 
        const elementPos = element.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: elementPos - offset,
            behavior: "smooth"
        });
    };

    return (
        <nav className="glass-bg">
            <div className="left">
                <div className="logo">
                    <h2><a href="#">Cohub</a></h2>
                </div>
            </div>

            <div className="right">
                <ul>
                    <li><a href="#" onClick={(e) => handleScroll(e, "home")}>Home</a></li>
                    <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a></li>
                    <li><a href="#courses" onClick={(e) => handleScroll(e, "courses")}>Courses</a></li>
                    <li><a href="#team" onClick={(e) => handleScroll(e, "team")}>Team</a></li>
                    <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
                    <li><a href="">Enroll</a></li>
                </ul>
            </div>
        </nav>
    );
};


export default Navbar;
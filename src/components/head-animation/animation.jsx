import "./animation.css"

const Animation = () => {
    return (
        <div class="loader">
            <svg width="100" height="100" viewBox="0 0 100 100">
                <defs>
                    <mask id="clipping" x="-50%" y="-50%" width="200%" height="200%">
                        <polygon points="0,0 100,0 100,100 0,100" fill="black"></polygon>
                        <polygon points="25,25 75,25 50,75" fill="white"></polygon>
                        <polygon points="50,25 75,75 25,75" fill="white"></polygon>
                        <polygon points="35,35 65,35 50,65" fill="white"></polygon>
                        <polygon points="35,35 65,35 50,65" fill="white"></polygon>
                        <polygon points="35,35 65,35 50,65" fill="white"></polygon>
                        <polygon points="35,35 65,35 50,65" fill="white"></polygon>
                    </mask>
                </defs>
            </svg>
            <div class="box"></div>
        </div>

    )
}

export default Animation;
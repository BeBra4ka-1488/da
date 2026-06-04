import "./nav.css"
import Luna from "../../../public/img/luna.png"
export default function Nav() {
    return (
        <nav>
            <p>MV</p>
            <div className="navigation">
                <p>Home</p>
                <p>About</p>
                <p>Project</p>
                <p>Skills</p>
                <p>Achievements</p>
                <p>Contact</p>
                <p><img src={Luna} alt="" /></p>
                <button>Resume</button>
            </div>
        </nav>
        
    )
}
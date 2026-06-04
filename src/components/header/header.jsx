import "./header.css"
import GitHub from "../../../public/img/GitHub.png"
export default function Header() {
    return (
        <header>
            <div className="information">
                <p>Hello! I'm</p>
                <h1>Markov <span className="name">Vladimir</span></h1>
                <h2>front-end Developer</h2>
                <h3>Building elegant solutions to complex problems with modern technologies.
                </h3>
                <div className="more">
                    <button className="Contact">Contact me</button>
                    <button>View Projects</button>
                    <a href=""><img src={GitHub} alt="" /></a>
                </div>

            </div>
            <div className="info">

            </div>
        </header>
    )
}
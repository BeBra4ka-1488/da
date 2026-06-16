import { BrowserRouter, Routes, Route, Link } from "react-router";
import "./nav.css"
import Luna from "../../../public/img/luna.png"
import Home from "../header/header"
export default function Nav() {
    return (
        
        <nav>
            <p className="name">MV</p>
            <div className="navigation">
                <a href="#Header">Home</a>
                <a href="#About">About</a>
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
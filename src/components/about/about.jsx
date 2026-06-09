import "./about.css"
import Bio from "../../../public/img/Bio.png"
import education from "../../../public/img/education.png"
import experience from "../../../public/img/experience.png"
export default function About(){
    return(
        <div className="about">
            <h1 className="h1_about">About Me</h1>
            <div className="bio">
                
                <p className="bio_p"><img src={Bio} alt="" />Bio</p>
                <p className="bio_info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem commodi sint culpa ratione est hic aliquam excepturi voluptatum aut cum provident nulla, impedit placeat repellat saepe dolorem amet ipsum?</p>

            </div>
            <div className="education">
                <h1 className="education_h1"><img src={education} alt="" />education</h1>
            </div>
            <div className="experience">
                <h1 className="education_h1"><img src={experience} alt="" />experience</h1>
                <p>front-end Developer</p>

            </div>
            <div className="profile">
                <img src="" alt="" />
                <p></p>
                <p></p>
                <div className="skils"></div>
                <button>
                    Resume
                </button>
            </div>
        </div>

    )
}
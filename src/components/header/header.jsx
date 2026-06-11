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
                
                
                <div className="more-info">
                    <div className="colors">
                
                <div className="red"></div>
                <div className="yellow"></div>
                <div className="green-block"></div>  
                
                </div>
                    <div className="developer"><p>developer.js</p></div>
                </div>
                <pre className="code">
  <span className="keyword">const</span>
  
  {" "}
  <span className="variable">developer</span> <span className="da">=</span>  {}
  <span className="orange">{"{"} </span>

  {"\n  "}
  <span className="purple">name</span><span className="da">:</span>{" "}
  <span className="green">'Markov Vladimir'</span><span className="da">,</span>
  {"\n  "}
  <span className="purple">skills</span><span className="da">:</span><span className="orange">{"["}</span> <span className="green">'React'</span><span className="da">,</span> <span className="green">'HTML/CSS'</span><span className="da">,</span> <span className="green">'JavaScript'</span> <span className="orange">{"]"}</span><span className="da">,</span>
  {"\n  "}
  <span className="purple">focuses <span className="da">:</span></span><span className="orange">{"["}</span><span className="green">front-end</span><span className="orange">{"]"}</span>
  {"\n  "}



  {"\n"}
        <span className="orange">{"}"}</span>
        <span className="da">;</span>
  
</pre>
                
            </div>
        </header>
    )
}
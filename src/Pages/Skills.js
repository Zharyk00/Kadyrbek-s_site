import React from "react";
import { AiFillHtml5 } from "react-icons/ai"
import { FaReact } from "react-icons/fa"
import { SiRedux, SiJquery, SiMaterialui, SiReactrouter, SiFramer } from "react-icons/si"
import { DiCss3, DiSass } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { BsFillBootstrapFill, BsFillGrid1X2Fill } from "react-icons/bs"
import "../Styles/Skills/skills.css"

function Skills({ track, trackstate }) {

    return (
        <div className="Skill__container" id="Skills">
            <h1>Skills</h1>
            <div className="container">
                <div className="icons">
                    <AiFillHtml5 className="icon" style={{ color: '#F25320'}} />
                    <p>HTML5</p>
                </div>

                <div className="icons">
                    <DiCss3 className="icon" style={{ color: '#016BB1'}} />
                    <p>CSS3</p>
                </div>

                <div className="icons">
                    <IoLogoJavascript className="icon" style={{ color: '#EAD41C'}} />
                    <p>JavaScript</p>
                </div>

                <div className="icons">
                    <FaReact className="icon" style={{ color: '#00CDF2'}} />
                    <p>React</p>
                </div>

                <div className="icons">
                    <SiRedux className="icon" style={{ color: '#7853B8'}} />
                    <p>Redux</p>
                </div>

                <div className="icons">
                    <DiSass className="icon" style={{ color: '#C36292'}} />
                    <p>SASS</p>
                </div>

                <div className="icons">
                    <SiMaterialui className="icon" style={{color: '#016BB1'}} />
                    <p>Material UI</p>
                </div>
                <div className="icons">
                    <SiFramer className="icon" style={{color: '#e900af'}} />
                    <p>Framer Motion</p>
                </div>

                <div className="icons">
                    <BsFillGrid1X2Fill className="icon" style={{ color: '#6237AE'}} />
                    <p>CSSGRID</p>
                </div>
                <div className="icons">
                    <SiReactrouter className="icon" style={{ color: '#ec4545'}} />
                    <p>ReactRouter</p>
                </div>

                <div className="icons">
                    <SiJquery className="icon" style={{ color: '#0863A3'}} />
                    <p>jQuery</p>
                </div>

                <div className="icons">
                    <BsFillBootstrapFill className="icon" style={{ color: '#6237AE'}} />
                    <p>Bootstrap</p>
                </div>
            </div>

        </div>
    )
}

export default Skills;
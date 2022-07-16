import React from "react";
import { AiFillHtml5 } from "react-icons/ai"
import { FaReact } from "react-icons/fa"
import { SiRedux, SiJquery } from "react-icons/si"
import { DiCss3, DiSass } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { BsFillBootstrapFill, BsFillGrid1X2Fill } from "react-icons/bs"
import "../Styles/Skills/skills.css"

function Skills({ track, trackstate }) {

    return (
        <div className="Skill__container" id="Skill">
            <h1 style={{ textAlign: 'center' }}>Skills</h1>
            <div className="container">
                <div className="icons">
                    <AiFillHtml5 style={{ color: '#F25320', fontSize: '60px' }} />
                    <p>HTML5</p>
                </div>

                <div className="icons">
                    <DiCss3 style={{ color: '#016BB1', fontSize: '60px' }} />
                    <p>CSS3</p>
                </div>

                <div className="icons">
                    <IoLogoJavascript style={{ color: '#EAD41C', fontSize: '60px' }} />
                    <p>JavaScript</p>
                </div>

                <div className="icons">
                    <FaReact style={{ color: '#00CDF2', fontSize: '60px' }} />
                    <p>React</p>
                </div>

                <div className="icons">
                    <SiRedux style={{ color: '#7853B8', fontSize: '60px' }} />
                    <p>Redux</p>
                </div>

                <div className="icons">
                    <DiSass style={{ color: '#C36292', fontSize: '60px' }} />
                    <p>SASS</p>
                </div>

                <div className="icons">
                    <SiJquery style={{ color: '#0863A3', fontSize: '60px' }} />
                    <p>jQuery</p>
                </div>

                <div className="icons">
                    <BsFillBootstrapFill style={{ color: '#6237AE', fontSize: '60px' }} />
                    <p>Bootstrap</p>
                </div>
                <div className="icons">
                    <BsFillGrid1X2Fill style={{ color: '#6237AE', fontSize: '60px' }} />
                    <p>CSSGRID</p>
                </div>
            </div>

        </div>
    )
}

export default Skills;
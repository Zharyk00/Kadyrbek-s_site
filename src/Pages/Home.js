import React from "react";
import { motion } from "framer-motion"
import { WBIcon } from "../Svg/svg";
import "../Styles/Home/home.css"



function Home({ toggle }) {
    return (
        <div className="Home__container" id="Home">
            <div className="content">
                <div className={toggle ? 'black' : 'white'}>
                    <h3>Hey I am Kadyrbek , FrontEnd developer</h3>
                    <p>I use my passion and skills to create amazing  and digital <br />products by useign various tools and animations</p>
                </div>
                <WBIcon />
            </div>

        </div>
    );
}

export default Home;
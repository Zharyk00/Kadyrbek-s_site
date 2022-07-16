import React, { useState } from "react";
import { motion } from "framer-motion"
import { WBIcon } from "../Svg/svg";
import "../Styles/Home/home.css"



function Home({ toggle }) {

    const [world, setWorld] = useState("Hello")
    const [web, setWeb] = useState("I am")
    const [developer, setDeveloper] = useState("Kadyrbek")

    return (
        <div className="Home__container" id="Home">
            <div className="content">
                <div className={!toggle ? 'black' : 'white'}>
                    <motion.h1 style={{ color: "red", fontSize: "100px" }} whileHover={{ x: 100, transition: { type: 'spring', stiffness: 100 } }} onHoverStart={() => setWorld("World")} onHoverEnd={() => setWorld("Hello")}>{world}</motion.h1>
                    <motion.h1 style={{ fontSize: "80px" }} onHoverStart={() => setWeb("Web")} whileHover={{ x: 100, transition: { type: 'spring', stiffness: 100 } }} onHoverEnd={() => setWeb("I am")}>{web}</motion.h1>
                    <motion.h1 style={{ fontSize: "80px" }} onHoverStart={() => setDeveloper("Developer")} whileHover={{ x: 100, transition: { type: 'spring', stiffness: 100 } }} onHoverEnd={() => setDeveloper("Kadyrbek")}>{developer}</motion.h1>
                </div>
                <div>
                    <WBIcon />
                </div>
            </div>

        </div>
    );
}

export default Home;
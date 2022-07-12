import React from 'react'
import '../Styles/Nav/nav.css'
import { motion } from "framer-motion"
import { Link, } from 'react-scroll'

function Nav({ state, toggle, track, trackstate }) {
    const handleSetActive = (to) => {
        trackstate(to)
    }

    return (
        <div className='main__container'>
            <div className='logo'>{track}</div>
            <ul className='container'>
                <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 1.4 } }}>
                    <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive}>Home</Link>
                </motion.div>
                <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 1.1 } }}>
                    <Link activeClass="active" to="About" spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive}>About</Link>
                </motion.div>
                <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 0.8 } }}>
                    <Link activeClass="active" to="Skill" spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive}>Skills</Link>
                </motion.div>
                <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}>
                    <Link activeClass="active" to="Work" spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive}>Work</Link>
                </motion.div>
                <button onClick={() => state(!toggle)}>toggle</button>
            </ul>
        </div>
    )
}

export default Nav
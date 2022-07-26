import React from 'react'
import '../Styles/Nav/nav.css'
import { motion } from "framer-motion"
import { Link, } from 'react-scroll'
import { RiMoonFill} from "react-icons/ri"
import { BsSunFill } from "react-icons/bs"

function Nav({ state, toggle, track, trackstate }) {
    const handleSetActive = (to) => {
        trackstate(to)
    }

    return (
        <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 1 } }} className='main__container'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5, delay: 1.4 } }} className='logo'>{track}</motion.div>
            <div className='container'>
                <motion.div initial={{ x: -100, opacity: 0 }} whileHover={{ scale: 1.1, y: -5, }} animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 1.4 } }}>
                    <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive}>Home</Link>
                </motion.div>
                <motion.div initial={{ x: -100, opacity: 0 }} whileHover={{ scale: 1.1, y: -5, }} animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 1.1 } }}>
                    <Link activeClass="active" to="About" spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive}>About</Link>
                </motion.div>
                <motion.div initial={{ x: -100, opacity: 0 }} whileHover={{ scale: 1.1, y: -5, }} animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 0.8 } }}>
                    <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-90} duration={500} onSetActive={handleSetActive}>Skills</Link>
                </motion.div>
                <motion.div initial={{ x: -100, opacity: 0 }} whileHover={{ scale: 1.1, y: -5, }} animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}>
                    <Link activeClass="active" to="Works" spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive}>Works</Link>
                </motion.div>
                <motion.div initial={{ x: -100, opacity: 0 }} whileHover={{ scale: 1.1, y: -5, }} animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 0.2 } }}>
                    <Link activeClass="active" to="Contacts" spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive}>Contacts</Link>
                </motion.div>
                <motion.div whileHover={{scale: 1.1, y: -5}} style={{ fontSize: "24px", cursor: "pointer" }} onClick={() => state(!toggle)}>{toggle ? <BsSunFill /> : <RiMoonFill />}</motion.div>
            </div>
        </motion.div>
    )
}

export default Nav
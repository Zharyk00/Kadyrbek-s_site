import React, { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import "../Styles/Contact/contact.css"
import { FiInstagram } from "react-icons/fi"
import { BsWhatsapp, BsTelegram } from "react-icons/bs"
import { VscGithub } from "react-icons/vsc"
import { TextField, Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { motion } from "framer-motion";

function Contact({ toggle }) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const ref = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_pqye58d', 'template_3bv1ix9', ref.current, 'eSJWlpw5-OQN0IEE4')
    }

    return (
        <div className="Contact__container" id="Contacts">

            <div className="container">
                <h1>Say Hello</h1>

                <form ref={ref} onSubmit={onSubmit} className="contact" autoComplete="off">
                    <div className="container_input">
                        <TextField
                            className="input"
                            id="outlined-textarea"
                            label="Name"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            focused
                        />
                    </div>
                    <div className="container_input">
                        <TextField
                            className="input"
                            id="outlined-textarea"
                            label="Email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            focused
                        />
                    </div>

                    <div className="container_input">
                        <TextField
                            className="input"
                            id="outlined-multiline-static"
                            placeholder="Message"
                            label="Message"
                            multiline
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            name="Message"
                            focused
                            rows={4}
                        />
                    </div>
                    <div>
                        <Button type='submit' variant="outlined" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </div>
                </form>
            </div>

            <div className="contact_wrapper">
                <div className="link_icons">
                    <motion.div whileHover={{ scale: 1.1, y: -5, }}>
                        <a href="https://www.instagram.com/mamatkasymow/">
                            <FiInstagram style={{ color: '#8D41A9', fontSize: '44px' }} />
                        </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, y: -5, }}>
                        <a href="https://wa.me/702262005">
                            <BsWhatsapp style={{ color: '#5BEF77', fontSize: '44px' }} />
                        </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, y: -5, }}>
                        <a href="https://t.me/mamatkasymow">
                            <BsTelegram style={{ color: '#27A0DE', fontSize: '44px' }} />
                        </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, y: -5, }}>
                        <a href="https://github.com/Kadyrbek00">
                            <VscGithub style={!toggle ? { color: "#fff", fontSize: '44px' } : { color: '#000', fontSize: '44px' }} />
                        </a>
                    </motion.div>
                </div>
                <p>Feeling social? Find me on these online spaces too!</p>
            </div>

        </div>

    )
}

export default Contact
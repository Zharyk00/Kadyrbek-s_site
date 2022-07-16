
import React from "react"
import "../Styles/Contact/contact.css"
import { FiInstagram } from "react-icons/fi"
import { BsWhatsapp, BsTelegram } from "react-icons/bs"
import { VscGithub } from "react-icons/vsc"
import { TextField, Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

function Contact({ toggle }) {


    return (
        <div className="Contact__container" id="Contacts">

            <div className="container">
                <h3>Say Hello</h3>

                <div className="contact">
                    <div className="container_input">
                        <TextField
                            className="input"
                            id="outlined-textarea"
                            label="Name"
                            placeholder="Name"

                            focused
                        />
                    </div>
                    <div className="container_input">
                        <TextField
                            className="input"
                            id="outlined-textarea"
                            label="Email"
                            placeholder="Email"

                            focused
                        />
                    </div>

                    <div className="container_input">
                        <TextField
                            className="input"
                            id="outlined-multiline-static"
                            placeholder="message"
                            label="Multiline"
                            multiline
                            focused
                            rows={4}


                        />
                    </div>
                    <div>
                        <Button variant="outlined" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="link_icons">
                    <div>
                        <a href="https://www.instagram.com/mamatkasymow/">
                            <FiInstagram style={{ color: '#8D41A9', fontSize: '44px' }} />
                        </a>
                    </div>
                    <div>
                        <a href="https://wa.me/702262005">
                            <BsWhatsapp style={{ color: '#5BEF77', fontSize: '44px' }} />
                        </a>
                    </div>
                    <div>
                        <a href="https://t.me/mamatkasymow">
                            <BsTelegram style={{ color: '#27A0DE', fontSize: '44px' }} />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/Sultanaalievich">
                            <VscGithub style={!toggle ? { color: "#fff", fontSize: '44px' } : { color: '#000', fontSize: '34px' }} />
                        </a>
                    </div>
                </div>
                <p>Feeling social? Find me on these online spaces too!</p>
            </div>

        </div>

    )
}

export default Contact
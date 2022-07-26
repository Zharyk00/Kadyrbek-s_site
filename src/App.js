import React, { useState } from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import Skills from "./Pages/Skills";
import Works from "./Pages/Works";
import '../src/Styles/App/app.css'
import Contact from "./Pages/Contacts";
import ScrollToTop from "./Pages/Scroll";
import Modal from "react-modal"

Modal.setAppElement('#root')
function App() {
  const [toggle, setToggle] = useState(true)
  const [track, setTreck] = useState('Home')

  return (
    <div className={!toggle ? 'black' : 'white'} >
      <Nav toggle={toggle} state={setToggle} track={track} trackstate={setTreck} />
      <Home toggle={toggle} />
      <About />
      <Skills />
      <Works />
      <Contact toggle={toggle} />
      <ScrollToTop/>
    </div>
  );
}

export default App;

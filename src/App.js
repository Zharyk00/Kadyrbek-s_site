import React, { useState } from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import Skills from "./Pages/Skills";
import Work from "./Pages/Work";
import '../src/Styles/App/app.css'

function App() {
  const [toggle, setToggle] = useState(true)
  const [track, setTreck] = useState('Home')

  return (
    <div className={toggle ? 'black' : 'white'}>
      <Nav toggle={toggle} state={setToggle} track={track} trackstate={setTreck} />
      <Home toggle={toggle} />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;

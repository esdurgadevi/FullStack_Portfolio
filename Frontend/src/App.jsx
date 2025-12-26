import React from "react";
import Projects from './Projects';
import SocialMedia from './SocialMedia'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from "./Page";
import About from "./About";
import Skills from "./Skills";
import Feats from "./Feats";

function App() {

  return (
    <Router future={{ v7_startTransition:true, v7_relativeSplatPath:true }}>
      <div>
        <SocialMedia />
      </div>
      <div className="menu">
        <Routes>
          <Route exact path="/" element={ <Page />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/feats" element={<Feats />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

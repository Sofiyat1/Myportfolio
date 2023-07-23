import React from 'react'
import './index.css'
import Home from './Router/Home'
import About from './Router/About'
import Project from './Router/Project'
import Contact from './Router/Contact'
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/project" element = {<Project />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/contact" element = {<Contact />} />

    </Routes>
    </>
  );
}

export default App;

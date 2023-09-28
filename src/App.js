import './App.css';
import React from 'react'
import Home from './Routes/home'
import About from './Routes/about'
import Project from './Routes/project'
import Contact from './Routes/contact'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/project' element = {<Project/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/contact' element = {<Contact/>} />
    </Routes>
    </>
  );
}

export default App;

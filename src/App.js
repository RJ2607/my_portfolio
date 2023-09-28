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
      <Route path='/' element = {<Project/>} />
      <Route path='/' element = {<About/>} />
      <Route path='/' element = {<Contact/>} />
    </Routes>
    </>
  );
}

export default App;

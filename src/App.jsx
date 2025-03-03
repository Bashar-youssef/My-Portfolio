// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Education />
              <Experience />
              <Projects />
              <Contact />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
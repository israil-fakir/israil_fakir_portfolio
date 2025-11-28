import React from 'react';
import Header from './components/Header';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';   
import BackToTop from './components/BackToTop';
import Workplace from './components/Workplace';

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <About />
        <Workplace />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Resume />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

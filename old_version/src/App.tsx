import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Resume from './components/Resume';
import BackToTop from './components/BackToTop';
import './App.css';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
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

export default App;
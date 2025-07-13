import React from 'react';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skillsets from './components/Skillsets';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Connect from './components/Connect';
import Participation from './components/Participation';
import Education from './components/Education';
function App() {
  return (
    <div className="relative">
      <Nav />
     
      <Hero />
      
      <About />
      <Education/>
      <Skillsets/>
      <Projects />
      <Certifications/>
      <Achievements/>
      <Participation/>
      <Connect/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

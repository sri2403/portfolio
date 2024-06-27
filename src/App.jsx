import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
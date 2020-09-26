import React from 'react';
import Menu from './menu/Menu';
import Home from './sections/home/Home';
import Experience from './sections/experience/Experience';
import Portfolio from './sections/portfolio/Portfolio';
import Skills from './sections/skills/Skills';
import Education from './sections/education/Education';
import About from './sections/aboutme/AboutMe';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <div className='App'>
        <Menu />
        <Home />
        <main>
          <Experience />
          <Portfolio />
          <Skills />
          <Education />
          <About />
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;

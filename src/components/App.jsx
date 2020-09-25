import React from 'react';
import Menu from './menu/Menu';
import Home from './sections/home/Home';
import Experience from './sections/experience/Experience';
import Portfolio from './sections/portfolio/Portfolio';
import Skills from './sections/skills/Skills';
import Education from './sections/education/Education';
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
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;

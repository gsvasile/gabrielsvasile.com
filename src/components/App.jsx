import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu/Menu';
import Home from './sections/home/Home';
import Experience from './sections/experience/Experience';
import Portfolio from './sections/portfolio/Portfolio';
import Skills from './sections/skills/Skills';
import Education from './sections/education/Education';
import About from './sections/aboutme/AboutMe';
import Footer from './footer/Footer'
import FadeInSection from './effects/FadeInSection'
import './App.css';

const App = () => {
  return (
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
      <FadeInSection shouldMove={false}>
        <Footer />
      </FadeInSection>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
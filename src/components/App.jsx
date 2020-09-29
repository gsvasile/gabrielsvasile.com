import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
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

const AppContainer = styled.div.attrs({
  className: 'App'
})``;

const App = () => {

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const handleNavbar = () => setNavbarOpen(!navbarOpen);

  return (
    <AppContainer>
      <Menu
        navbarState={navbarOpen}
        handleNavbar={handleNavbar}
      />
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
    </AppContainer>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
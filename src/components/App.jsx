import React from 'react';
import styled from 'styled-components';
import Menu from './menu/Menu';
import Home from './sections/home/Home';
import Experience from './sections/experience/Experience';
import Portfolio from './sections/portfolio/Portfolio';
import Skills from './sections/skills/Skills';
import Education from './sections/education/Education';
import About from './sections/aboutme/AboutMe';
import './App.css';

export default () =>
  <AppContainer>
    <Menu />
    <Home />
    <main>
      <Experience />
      <Portfolio />
      <Skills />
      <Education />
      <About />
    </main>
  </AppContainer>;

const AppContainer = styled.div.attrs({
  className: 'App'
})``;
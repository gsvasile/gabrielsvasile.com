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
import './App.css';

const FadeInSection = (props) => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  const fadeClass = props.fadeClass ?? 'fade-in-section';
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const current = domRef.current;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);
  return (
    <div
      className={`${fadeClass} ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

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
        <FadeInSection>
          <About />
        </FadeInSection>
      </main>
      <FadeInSection fadeClass='fade-in-section-no-move'>
        <Footer />
      </FadeInSection>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
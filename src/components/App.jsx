import React from 'react';
import Menu from './menu/Menu';
import Home from './sections/home/Home';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <div className='App'>
        <Menu />
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;

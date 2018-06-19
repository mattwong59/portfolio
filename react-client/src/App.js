import React, { Component } from 'react';
import './App.css';
import Header  from './Header.jsx';
import Projects from './Projects';
import About from './About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
        <About />
      </div>
    );
  }
}

export default App;

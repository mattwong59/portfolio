import React, { Component } from 'react';
import './App.css';
import Header  from './Header.jsx';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
// import SimpleSlider from './Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
        {/* <SimpleSlider /> */}
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header  from './Header.jsx';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
      </div>
    );
  }
}

export default App;

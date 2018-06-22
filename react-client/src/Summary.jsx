import React, { Component } from 'react';
import './App.css';

class Summary extends Component {
  render() {
        return (
            <section id="summary" className="section is-medium is-long summary">
                <div className="container is-centered has-text-centered">
                    <h1 className="has-text-centered is-size-2 dark hover hover-1">
                    Summary
                    </h1>
                    <h2 className="subtitle">
                    Full Stack Web Developer passionate about problem solving, UI/UX design, and sharing ideas. Recent Lighthouse Labs grad where I completed a project based curriculum focused around Javascript. I like to balance my love for coding and video games with staying active, 
                    whether it be hiking, snowboarding or surviving an intense hot yoga session.  
                    </h2>
                </div>
            </section>
        );
    }
}


export default Summary
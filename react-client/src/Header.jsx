import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
        <section className="hero is-fullheight">
            <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <h2 className="logo">MW</h2>
                </div>
            </nav>
            </div>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="name">
                        Matt Wong
                    </h1>
                    <h2 className="is-size-4 has-text-weight-semibold">
                        Full Stack Web Developer
                    </h2>

                    <section className="section has-text-weight-semibold">
                        <div className="container is-fluid">
                            {/* <h2 class="title">Summary</h2> */}
                            {/* <p>ESL Teacher turned Project Manager in construction turned Web Developer, eager to start constructing web apps. Passionate about problem solving, learning, and helping others however I can. I like to balance my love for coding and video games with staying active, whether it be hiking, snowboarding or surviving an intense hot yoga session.</p> */}

                            <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
                                <ul>
                                    <li>Former Teacher</li>
                                    <li>Problem Solver</li>
                                    <li>Passionate Learner</li>
                                    <li>Yogi</li>
                                    <li>Runner</li>
                                    <li>Gamer</li>
                                </ul>
                            </nav>
                        </div>
                    </section>
                </div>
            </div>
                <nav className="tabs has-text-weight-semibold">
                    <div className="container">
                        <ul>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#employment">Employment</a></li>
                            <li><a href="#about">About</a></li>
                        </ul>
                    </div>
                </nav>
            {/* </div> */}
        </section>
    );
  }
}

export default Header;
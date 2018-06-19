import React, { Component } from 'react';
import './App.css';

class About extends Component {
    render() {
      return (
        <section id="about" className="section dark"> 
            <h1 className="has-text-centered is-size-2 dark">More Fun Facts</h1> 
            <div className="container">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="container is-fluid">
                            <h2 className="title is-size-4">Certificates</h2>
                            <h4 className="is-size-5">Canadian Red Cross</h4>
                            <p>BC Workplace Emergency First Aid OFA Level 1 CPR Level A</p>
                            <p className="date">Mar 2016 - Mar 2019</p>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className= "container is-fluid">
                            <h2 className="title is-size-4">Education</h2>
                            <div>
                                <h4 className="is-size-5"><a href="https://www.lighthouselabs.ca/web-bootcamp" className="project-title is-size-5">Lighthouse Labs</a></h4>
                                <p className="date">May 2018</p>
                                <p>Web Development Bootcamp</p>
                            </div>
                            <br/>
                            <h4 className="is-size-5">Simon Fraser University</h4>
                            <div>
                            <p className="date">Apr 2010</p>
                                <p>Bachelor of Arts</p>
                                <p><em>Major: English Literature, Minor: Geography</em></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="container is-fluid">
                            <h2 className="title is-size-4">Volunteering</h2>
                            
                            <h4 className="is-size-5">Eduction and Training Educators Association (ETEA)</h4>
                            <p className="date">Jan 2014</p>
                            <p className="has-text-weight-semibold">Professional Development Workshop Instructor</p>
                            <div className="content">
                                <ul>
                                    <li>Mentored instructors to more efficiently create material that meets customer needs</li>
                                    <li>Collaborated with team members of the ETEA (Education and Training Educators Association)</li>
                                </ul>
                            </div>

                            <h4 className="is-size-5">Sands Senior Secondary</h4>
                            <p className="date">Sep 2006 - Dec 2010</p>
                            <p className="has-text-weight-semibold">Football Coach</p>
                            <div className="content">
                                <ul>
                                    <li>Developed and implemented training programs, fundraisers, and meetings</li>
                                    <li>Mentored individuals towards achieving their goals</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="tile is-parent">
                        <div className="container is-fluid">
                            <h2 className="title is-size-4">Activities</h2>
                            <h4 className="is-size-5">Running</h4>
                            <p>I approach web development with the dedication, work ethic and self-motivation I gain from running half-marathons.</p>
                            <br/>
                            <h4 className="is-size-5">Traveling</h4>
                            <p>I love getting out there, seeing the world, and experiencing new cultures. I think people can learn so much by exposing themselves to new and different environments and ideas</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>        
      )
    }
}

export default About;
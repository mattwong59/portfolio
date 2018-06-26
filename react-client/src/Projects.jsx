import React from "react";
import './App.css';

class Projects extends React.Component {
    componentDidMount(){
        console.log('Projects')

    }
  render() {
    return (
    <section id="projects"className="section dark">
        <h1 className="has-text-centered is-size-2 dark hover hover-1">Projects</h1>
        <div className="container is-centered has-text-centered">
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    {/* <div className="data-info">
                           <h2> Beer Cat Tourism App </h2>
                            <p className="is-size-6">Tools: React, Ruby on Rails, HTML, CSS</p>
                        <h4>Technologies Used:</h4>
                        <ul>
                            <li>dasdsafasfas</li>
                            <li>dasdsafasfas</li>
                            <li>dasdsafasfas</li>
                        </ul>
                    </div> */}
                    <a href="https://github.com/mattwong59/Beer-Cat-Tourism-App" target="_blank" rel="noopener noreferrer" className="project-title is-size-4">
                        <figure className="image is-256x256">
                            <img src={require("./docs/beercat-pub-pounce.png")} alt="Screenshot of beer cat tour page."/>
                            <h4>Beer Cat Tourism App</h4>
                            <p className="is-size-6">Tools: React, Ruby on Rails, HTML, CSS</p>
                        </figure>
                    </a> 
                </div>
                <div className="tile is-parent">
                    <a href="https://github.com/mattwong59/chatty-app" target="_blank" rel="noopener noreferrer" className="project-title is-size-4">
                        <figure className="image is-256x256">
                            <img src={require("./docs/chatty-two-users.png")} alt="Screenshot of chatty with 2 users sending messages."/>
                            Chatty App
                            <p className="is-size-6">Tools: React, WebSockets, Express, CSS</p>
                        </figure>
                    </a> 
                </div>
                <div className="tile is-parent">
                    <a href="https://github.com/mattwong59/decider_midterm" target="_blank" rel="noopener noreferrer" className="project-title is-size-4">
                        <figure className="image is-256x256">
                            <img src={require("./docs/decider.png")} alt="Screenshot of decider home page."/>
                            Decider
                            <p className="is-size-6">Tools: Node, Express, EJS, PSQL, SASS, AJAX.</p>
                        </figure>
                    </a> 
                </div>
            </div>
            
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <a href="https://github.com/mattwong59/jungle-rails" target="_blank" rel="noopener noreferrer" className="project-title is-size-4">
                        <figure className="image is-256x256">    
                            <img src={require("./docs/jungle-resize.png")} alt="Screenshot of jungle's product page."/>
                            Jungle   
                            <p className="is-size-6">Tools: Ruby on Rails, Ruby</p>         
                        </figure>
                    </a>
                </div>
                    <div className="tile is-parent">
                    <figure className="image is-256x256">
                        <a href="https://github.com/mattwong59/tweeter" target="_blank" rel="noopener noreferrer" className="project-title is-size-4">
                            <img src={require("./docs/tweeter-restyle.png")} alt="Screenshot of tweeter home page"/>
                            Tweeter
                            <p className="is-size-6">Tools: HTML, CSS, JS, jQuery, AJAX, Node, Express, MongoDB</p>         
                        </a>
                    </figure>
                    </div>
                    <div className="tile is-parent">
                    <figure className="image is-256x256">
                        <a href="https://github.com/mattwong59/tinyApp" target="_blank" rel="noopener noreferrer" className="project-title is-size-4">
                            <img src={require("./docs/Tiny-App-URLS.png")} alt="Screenshot of tiny app urls page."/>
                            Tiny App
                            <p className="is-size-6">Tools: Node, Express</p>         
                        </a>
                    </figure>
                </div>
            </div>
            <a href="https://github.com/mattwong59" className="button is-medium is-inverted" target="_blank" rel="noopener noreferrer">
                <span className="icon">
                <i className="fab fa-github"></i>
                </span>
                <span>GitHub</span>
            </a>
        </div>
    </section>
    );
  }
}

export default Projects;
import React from "react";
import './App.css';

class Projects extends React.Component {
  render() {
    return (
    <section id="projects"className="section dark">
        <h1 className="has-text-centered is-size-2 dark">Projects</h1>
        <div className="container is-centered has-text-centered">
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <a href="https://github.com/mattwong59/Beer-Cat-Tourism-App" target="_blank" rel="noopener noreferrer" className="project-title is-size-4">
                        <figure className="image is-256x256">
                            <img src={require("./docs/beercat-tour-bf.png")} alt="Screenshot of beer cat tour page."/>
                            Beer Cat Tourism App
                            <p className="is-size-6">Tools: React, Ruby on Rails, HTML, CSS</p>
                        </figure>
                    </a> 
                </div>
                <div className="tile is-parent">
                    <a href="https://github.com/mattwong59/chatty-app" target="_blank" rel="noopener noreferrer" className="project-title is-size-4">
                        <figure className="image is-256x256">
                            <img src={require("./docs/chatty-two-users-bf.png")} alt="Screenshot of chatty with 2 users sending messages."/>
                            Chatty App
                            <p className="is-size-6">Tools: React, WebSockets, Express, CSS</p>
                        </figure>
                    </a> 
                </div>
                <div className="tile is-parent">
                    <a href="https://github.com/mattwong59/decider_midterm" target="_blank" rel="noopener noreferrer" className="project-title is-size-4">
                        <figure className="image is-256x256">
                            <img src={require("./docs/decider-bf.png")} alt="Screenshot of decider home page."/>
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
                            <img src={require("./docs/jungle-product-bf.png")} alt="Screenshot of jungle's product page."/>
                            Jungle   
                            <p className="is-size-6">Tools: Ruby on Rails, Ruby</p>         
                        </figure>
                    </a>
                </div>
                    <div className="tile is-parent">
                    <figure className="image is-256x256">
                        <a href="https://github.com/mattwong59/tweeter" target="_blank" rel="noopener noreferrer" className="project-title is-size-4">
                            <img src={require("./docs/tweeter-homepage-bf.png")} alt="Screenshot of tweeter home page"/>
                            Tweeter
                            <p className="is-size-6">Tools: HTML, CSS, JS, jQuery, AJAX, Node, Express, MongoDB</p>         
                        </a>
                    </figure>
                    </div>
                    <div className="tile is-parent">
                    <figure className="image is-256x256">
                        <a href="https://github.com/mattwong59/tinyApp" target="_blank" rel="noopener noreferrer" className="project-title is-size-4">
                            <img src={require("./docs/tinyapp-bf.png")} alt="Screenshot of tiny app urls page."/>
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
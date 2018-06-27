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
                    <div className="my-container">
                        <div className="my-content">
                            <div className="content-overlay">
                                <div className="content-details fadeIn-top">
                                    <h3>Technologies Used:</h3><br/>
                                    <ul>
                                        <li>React.js</li>
                                        <li>Ruby on Rails</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                    </ul>
                                    <a href="https://beertourapp.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="button is-outlined is-rounded">
                                        Visit Website &nbsp; <i className="fas fa-angle-right"></i>
                                    </a>
                                </div>                            
                            </div>
                            <img className="content-image" src={require("./docs/beercat-pub-pounce.png")} alt="Screenshot of beer cat tour page." />
                            <h4 className="is-size-4">Beer Cat Tourism App</h4>
                        </div>
                    </div>
                </div>
                <div className="tile is-parent">
                    <div className="my-container">
                        <div className="my-content">
                            <div className="content-overlay">
                                <div className="content-details fadeIn-top">
                                    <h3>Technologies Used:</h3><br/>
                                    <ul>
                                        <li>React.js</li>
                                        <li>Node.js</li>
                                        <li>Express</li>
                                        <li>WebSockets</li>
                                        <li>CSS</li>
                                    </ul>
                                    <a href="https://github.com/mattwong59/chatty-app" target="_blank" rel="noopener noreferrer" class="button is-outlined is-rounded">
                                        Visit Repo &nbsp; <i className="fas fa-angle-right"></i>
                                    </a>
                                </div>                            
                            </div>
                            <img src={require("./docs/chatty-two-users.png")} alt="Screenshot of chatty with 2 users sending messages."/>
                            <h4 className="is-size-4">Chatty App</h4>
                        </div>
                    </div>                 
                </div>
                <div className="tile is-parent">
                    <div className="my-container">
                        <div className="my-content">
                            <div className="content-overlay">
                                <div className="content-details fadeIn-top">
                                    <h3>Technologies Used:</h3><br/>
                                    <ul>
                                        <li>Node.js</li>
                                        <li>Express</li>
                                        <li>EJS</li>
                                        <li>PostgreSQL</li>
                                        <li>SASS</li>
                                        <li>AJAX</li>
                                    </ul>
                                    <a href="https://decider-supreme.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="button is-outlined is-rounded">
                                        Visit Website &nbsp; <i className="fas fa-angle-right"></i>
                                    </a>
                                </div>                            
                            </div>
                            <img src={require("./docs/decider.png")} alt="Screenshot of decider home page."/>
                            <h4 className="is-size-4">Decider</h4>
                        </div>
                    </div>                                 
                </div>
            </div>
            
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <div className="my-container">
                        <div className="my-content">
                            <div className="content-overlay">
                                <div className="content-details fadeIn-top">
                                    <h3>Technologies Used:</h3><br/>
                                    <ul>
                                        <li>Ruby on Rails</li>
                                        <li>Ruby</li>
                                        <li>CSS</li>
                                    </ul>
                                    <a href="https://github.com/mattwong59/jungle-rails" target="_blank" rel="noopener noreferrer" class="button is-outlined is-rounded">
                                        Visit Repo &nbsp; <i className="fas fa-angle-right"></i>
                                    </a>
                                </div>                            
                            </div>
                            <img src={require("./docs/jungle-resize.png")} alt="Screenshot of jungle's product page."/>
                            <h4 className="is-size-4">Jungle(e-commerce app)</h4>
                        </div>
                    </div>                                 
                </div>                      
                <div className="tile is-parent">
                    <div className="my-container">
                        <div className="my-content">
                            <div className="content-overlay">
                                <div className="content-details fadeIn-top">
                                    <h3>Technologies Used:</h3><br/>
                                    <div className="tools">
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Javascript</li>
                                        <li>jQuery</li>
                                    </ul>
                                    <ul>
                                        <li>MongoDB</li>
                                        <li>AJAX</li>
                                        <li>Node.js</li>
                                        <li>Express</li>
                                    </ul>
                                    </div>
                                    <a href="https://github.com/mattwong59/tweeter" target="_blank" rel="noopener noreferrer" class="button is-outlined is-rounded">
                                        Visit Repo &nbsp; <i className="fas fa-angle-right"></i>
                                    </a>
                                </div>                            
                            </div>
                            <img src={require("./docs/tweeter-restyle.png")} alt="Screenshot of tweeter home page"/>
                            <h4 className="is-size-4">Tweeter</h4>
                        </div>
                    </div>                                        
                </div>
                <div className="tile is-parent">
                    <div className="my-container">
                        <div className="my-content">
                            <div className="content-overlay">
                                <div className="content-details fadeIn-top">
                                    <h3>Technologies Used:</h3><br/>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Node.js</li>
                                        <li>Bulma</li>
                                    </ul>
                                    <a href="https://github.com/mattwong59/tinyApp" target="_blank" rel="noopener noreferrer" class="button is-outlined is-rounded">
                                        Visit Repo &nbsp; <i className="fas fa-angle-right"></i>
                                    </a>
                                </div>                            
                            </div>
                            <img src={require("./docs/Tiny-App-URLS.png")} alt="Screenshot of tiny app urls page."/>
                            <h4 className="is-size-4">Tiny App</h4>
                        </div>
                    </div>                                        
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
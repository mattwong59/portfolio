import React, { Component } from 'react';
import './App.css';

class Contact extends Component {
  render() {
    return (
        <footer className="footer section is-small has-text-centered">
            <div className="container">
                <a href="#projects">
                  <i class="fas fa-chevron-up"></i>
                </a>
            </div>
            <section className="section contact">
                <div className="container is-narrow">
                    <div className="container">
    
                    <h3 className=" is-size-4">Contact</h3><br/>
                    <p className="contact-icons">
                        <a className="button" href="mailto:mattwong59@gmail.com">
                            <span className="icon is-small">
                                <i className="fas fa-md fa-envelope"></i>
                            </span>
                        </a>
                        <a className="button" href="https://www.linkedin.com/in/mattwong59">
                            <span className="icon is-small">
                                <i className="fab fa-linkedin-in"></i>
                            </span>
                        </a>
                        <a className="button" href="https://github.com/mattwong59">
                            <span className="icon is-small">
                                <i className="fab fa-github-alt"></i>
                            </span>
                        </a>
                        <a className="button" href="tel:+6047904193">
                            <span className="icon is-small">
                                <i className="fas fa-md fas fa-phone"></i>
                            </span>
                        </a>
                    </p><br/>
                    <h5>Crafted with care by Matt Wong</h5>
                    <br/>
                    <a href="https://bulma.io">
                        <img className="bulma-icon" src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="128" height="24"/>
                    </a>
                </div>

                {/* <div className=" container">
                    <ul className="bottom-nav">
                         <li><a className="nav-link" href="#projects">Projects</a></li>
                        <li><a className="nav-link" href="#employment">Employment</a></li>
                        <li><a className="nav-link" href="#about">About</a></li>
                    </ul>
                </div> */}
                </div>
                {/* <div className="email-message">
                    <h3 className="has-text-centered is-size-4">Email Me</h3>        
                    <form action="mailto:mattwong59@gmail.com?subject=Hi Matt" method="post"  encType="text/plain">
                        <textarea className="textarea" type="text" name="message"  placeholder="Enter message here..."/><br/><br/>
                        <div className="email-buttons">
                            <input className="button is-medium is-inverted" type="submit" value="Send"/>
                            <input className="button is-medium is-inverted" type="reset" value="Reset"/>
                        </div>
                    </form>
                </div> */}
                {/* <div className=" container">
                    <ul className="bottom-nav">
                         <li><a className="nav-link" href="#projects">Projects</a></li>
                        <li><a className="nav-link" href="#employment">Employment</a></li>
                        <li><a className="nav-link" href="#about">About</a></li>
                    </ul>
                </div> */}
            </section>
            

        </footer>
    )
  }
}

export default Contact;
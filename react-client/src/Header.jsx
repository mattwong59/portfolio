import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
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
                <div className="typewriter container has-text-centered">
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

                            <h1>
                                <a href="" class="typewrite" data-period="2000" 
                                data-type='[ "I am a passionate learner", "I am a problem solver", "I am a former teacher", "I am a runner", "I am a gamer", "I am a yogi" ]'>
                                    <span class="wrap"></span>
                                </a>
                            </h1>


                            {/* <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
                                <ul>
                                    <li>Problem Solver</li>
                                    <li>Passionate Learner</li>
                                    <li>Former Teacher</li>
                                    <li>Yogi</li>
                                    <li>Runner</li>
                                    <li>Gamer</li>
                                </ul>
                            </nav> */}
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
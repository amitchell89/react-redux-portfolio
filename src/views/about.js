import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import Helmet from "react-helmet";

export default class About extends Component {

  componentDidMount() {
    // Fade In
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "opacity 500ms";
      elem.style.opacity = 1;
    });
  }

  render() {
    return (
      <div>
        <div className="about--portrait"></div>
        <div className="about--copy">
          <Helmet
            title="Aaron Mitchell: About"
            meta={ [
              { name: "description", content: this.props.route.meta.meta_about },
              { property: "og:title", content: 'Aaron Mitchell\'s Online Portfolio: About the Artist'},
              { property: "og:url", content: 'https://mitchellaaron.com/'},
              { property: "og:image", content: 'https://mitchellaaron.com/images/Aaron_Mitchell_Portrait.jpg'},
            ] }
          />
          <p>
          Hello! My name is Aaron Mitchell and I’m a <span className="highlight">Senior UI Designer</span> at <a href="https://www.cogolabs.com/" target="_blank">Cogo Labs</a>, a startup accelerator in Cambridge, MA. I also do freelance illustration, design, branding and web development.
          </p>
          <p>
          At Cogo Labs I am responsible for a wide variety of tasks and ownership at all stages of the web development pipeline including <span className="highlight">Brainstorming, Brand Development, Logo Design, Wireframing, Prototyping, Web Design, Front End Development, Email Design & Development, A/B Testing and User Testing.</span> Working at a startup accelerator has allowed me to contribute to lots of diverse, fast moving projects in markets such as <span className="highlight">Social Networking, Healthcare, Financial Services, Online Dating, Apartment Rentals,</span> and <span className="highlight">Weather</span> among others. I have also have had the opportunity to mentor interns and fellow designers.
          </p>
          <p>
          Before joining Cogo Labs in June 2014 I worked as a web designer for Liquid Wireless, a mobile marketing startup owned by Publishers Clearing House. My responsibilities including <span className="highlight">Designing Mobile Advertisements, Landings Pages, Android Apps</span> and <span className="highlight">B2B marketing Resources</span> as well as <span className="highlight">Email Design & Development.</span> I managed one direct report.
          </p>
          <p>
          One of the most exciting skills I’ve had the chance to learn in the past year is <span className="highlight">Web Development using React and Redux.</span> I have experience working with React on multiple projects at Cogo Labs but have also built several sites from scratch on my own including this one! You can view the <a href="https://github.com/amitchell89/react-redux-portfolio" target="_blank">source code for this project</a>, or explore my <a href="https://github.com/amitchell89" target="_blank">entire github for more projects</a>.
          </p>
          <p> Want to talk? <Link to="contact">Send me a message</Link></p>
        </div>
      </div>
    )
  }
}

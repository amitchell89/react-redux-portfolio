import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class About extends Component {

  render() {
    return (
      <div className="About">
        <div className="About--portrait"></div>
        <div className="About--copy">
          <p>
          Hello! My name is Aaron Mitchell and I’m a <span className="highlight">Lead UI Designer</span> at <a href="https://www.cogolabs.com/" target="_blank">Cogo Labs</a>, a startup accelerator in Cambridge, MA. I also do freelance illustration, design, branding and web development.
          </p>
          <p>
          At Cogo Labs I am responsible for a wide variety of tasks and ownership at all stages of the web development pipeline including <span className="highlight">Brainstorming, Brand Development, Logo Design, Wireframing, Prototyping, Web Design, Front End Development, Email Design & Development, A/B Testing and User Testing.</span> Working at a startup accelerator has allowed me to contribute to lots of diverse, fast moving projects in markets such as <span className="highlight">Social Networking, Healthcare, Financial Services, Online Dating, Apartment Rentals,</span> and <span className="highlight">Weather</span> among others. As Lead UI Designer I am also responsible for leading the design team, which involves prioritizing and assigning design tasks, mentoring junior designers and leading the hiring process for new designers.
          </p>
          <p>
          Before joining Cogo Labs in June 2014 I worked as a web designer for Liquid Wireless, a mobile marketing startup owned by Publishers Clearing House. My responsibilities including <span className="highlight">Designing Mobile Advertisements, Landings Pages, Android Apps</span> and <span className="highlight">B2B marketing Resources</span> as well as <span className="highlight">Email Design & Development.</span> I managed one direct report.
          </p>
          <p>
          One of the most exciting skills I’ve had the chance to learn in the past year is <span className="highlight">Web Development using React and Redux.</span> I have experience working with React on multiple projects at Cogo Labs but have also built several sites from scratch on my own including this one! You can view the <a href="https://github.com/amitchell89/react-redux-portfolio" target="_blank">source code for this project</a>, or explore my <a href="https://github.com/amitchell89" target="_blank">entire github for more projects</a>.
          </p>
        </div>
      </div>
    )
  }
}

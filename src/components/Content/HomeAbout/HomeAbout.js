import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import InlineImage from '../../Global/InlineImage';

export default class HomeAbout extends Component {

  render() {
    return (
      <div className="HomeAbout" id="HomeAbout">

        <h1>About Me</h1>

        <InlineImage 
          src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/portraits/aaron_mitchell_portrait_moose_almighty.jpg"
          position="right"
          label="Performing in Moose Almighty. 2020"
        />

        <p>
        I was born in Bangor, Maine and raised in the midcoast town of Belfast. In 2011, I graduated from the New Hampshire Institute of Art in Manchester, NH with a Bachelor of Fine Arts. I majored in Illustration, focusing on both digital skills and traditional fine art mediums such as oil painting. Since July 2012, I have been working as a professional designer in the tech industry. In the last 8 years I’ve had the opportunity to work at a small mobile marketing startup (Liquid Wireless in Portland, ME. 2012 - 2014), a venture-backed startup accelerator (Cogo Labs in Cambridge, MA. 2014 - 2017) and an international pet care marketplace (Rover in Seattle, WA. 2017 - Present). I’ve learned skills at every stage of the product development pipeline including UX/UI design, wireframing, prototyping, front-end development, user research, A/B testing, CRO, SEO, branding, entrepreneurship, idea generation and group facilitation among others. When not at work, you’ll find me building out my latest side project, or playing bass in my band Moose Almighty. 
        </p>

        <InlineImage 
          src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/portraits/aaron_mitchell_portrait_graffiti.jpg"
          position="left"
          label="Making Street Art in Melbourne, Australia. 2018"
        />  

        <h3>Rover</h3>
        <p>
        I joined the pet care marketplace Rover as a Product Designer in August 2017. At Rover, I am responsible for a wide variety of tasks including UX/UI design, wireframing, prototyping, user research, creating design specs for development, leading design workshops and collaborating closely with Product Managers and Developers. I am the primary designer on the growth team as we work to maximize new bookings through CRO and SEO initiatives, although I frequently contribute to other areas of the product as well. My biggest achievement in the growth space was in my influence on how it was run and projects prioritized. <i>“... [Aaron] transformed the way the Growth PM team works with UX and approaches work … taking the Growth product space from a fairly reactive one, to a more customer focused, strategic product space.” (2019 Review)</i>
        </p>
        <p>
        In 2019, I partnered with another designer to create a north star vision for the Rover home page. We considered current challenges such as competing business objectives along with future needs Rover would have as we added new services and moved into international markets. We conducted an intensive research phase that included 13 stakeholder interviews, competitor analysis, user testing the current home page and building scenario maps to identify existing issues and opportunities. We led a design workshop to sketch concepts, and conducted 56 user tests to reach our final vision. The first wave of updates based on the redesign were launched in January 2020. The mobile homepage won handily, reducing bounce by 9% and increasing homepage to search by 3%. <i>“… the Homepage Vision work was an excellent demonstration of your ability to take on an ambiguous, extra-large size project, keep it on track, and deliver results, even without PM support for most of the effort. ” (2019 Review)</i> 
        </p>
        <p>
        Other notable projects I have worked on include designing a new experience for unauthenticated users on our mobile apps, numerous CRO improvements to our search and sitter profile pages, redesigning our careers page, and adding the ability to edit a booked service on Rover which reduced operational costs of our customer service team by 30%. 
        </p>

        <InlineImage 
          src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/portraits/aaron_mitchell_portrait_cogo_labs.jpg"
          position="right"
          label="Cogo Labs. 2015"
        />  

        <h3>Cogo Labs</h3>
        <p>
        From June 2014 to August 2017 I worked as Lead UI Designer at Cogo Labs, a startup accelerator in Cambridge, MA. I was responsible for a wide variety of tasks and ownership at all stages of the web development pipeline including Brainstorming, Brand Development, Logo Design, Wireframing, Prototyping, Web Design, Front End Development, Email Design & Development, A/B Testing and User Testing. Working at a startup accelerator allowed me to contribute to lots of diverse, fast moving projects in markets such as Social Networking, Healthcare, Financial Services, Online Dating and Apartment Rentals among others. As Lead UI Designer I was also responsible for leading the design team, which involved prioritizing and assigning design tasks, mentoring junior designers and leading the hiring process for new designers.
        </p>
        <h3>Liquid Wireless</h3>
        <p>
        From July 2012 to May 2014 I worked as a web designer for Liquid Wireless, a mobile marketing startup owned by Publishers Clearing House. My responsibilities included Designing Mobile Advertisements, Landings Pages, Android Apps and B2B marketing Resources as well as Email Design & Development. I managed one direct report.
        </p>      

        <h3>Web Development</h3>
        <p>
        Finally, one of the most exciting skills I’ve learned in my career is Web Development using React and Redux. I first got experience working with React at Cogo Labs, and broadened my development experience in my freelance career, building sites such as https://schillaciguitars.com/ and https://www.moosealmighty.com/, along with this very site! I have also taken the Rover Front End 101 React course, and worked closely with the Rover developers in my day-to-day work to learn about building sites at scale. Check out my github for more projects. 
        </p>

      </div>
    )
  }
}

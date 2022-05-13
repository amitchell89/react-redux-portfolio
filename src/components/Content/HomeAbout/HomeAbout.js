import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import InlineImage from '../../Global/InlineImage';

export default class HomeAbout extends Component {

  render() {
    return (
      <div className="HomeAbout" id="HomeAbout">

        <h1>About Me</h1>

        <section>

          <InlineImage 
            src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/portraits/aaron_mitchell_portrait_moose_almighty.jpg"
            position="right"
            label="Performing in Moose Almighty. 2020"
          />

          <p>
          I was born in Bangor, Maine and raised in the midcoast town of Belfast. In 2011, I graduated from the New Hampshire Institute of Art in Manchester, NH with a Bachelor of Fine Arts. I majored in Illustration, focusing on both digital skills and traditional fine art mediums such as oil painting. Since July 2012, I have been working as a professional designer in the tech industry. In the last 8 years I’ve had the opportunity to work at a small mobile marketing startup (Liquid Wireless in Portland, ME. 2012 - 2014), a venture-backed startup accelerator (Cogo Labs in Cambridge, MA. 2014 - 2017) and an international pet care marketplace (Rover in Seattle, WA. 2017 - Present). I’ve learned skills at every stage of the product development pipeline including UX/UI design, wireframing, prototyping, front-end development, user research, A/B testing, CRO, SEO, branding, entrepreneurship, idea generation and group facilitation among others. When not at work, you’ll find me building out my latest side project, or playing bass in my band Moose Almighty. 
          </p>

        </section>

        <section>

          <h2>Rover</h2>

          <p>
          I joined the pet care marketplace Rover as a Product Designer in August 2017. As a product designer at Rover I have specialised in Trust & Safety, Growth and DEI work and am responsible for tasks such as UX/UI design, wireframing, prototyping, user research, high fidelity design, creating design specs for development, leading design workshops and mentorship. 
          </p>

           
          <p>
          I am currently the lead designer of the Trust & Safety team from January 2021 to present. As a founding member of the team, I designed a north star vision that was fundamental in shaping the team roadmap by identifying opportunities for investment and defining 'minimal floor' and 'good' levels of investment to meet standard of care expectations. Specific projects include reporting & blocking, phone and email verification, expanding our safety center, and improving post booking feedback collection from pet sitters. <i>“...The whole org is particularly thankful to [Aaron] for taking the ambiguous task of figuring out what 'good looks like' when it comes to making sure we keep people safe from physical and emotional harm. Working on a new, complex team and space like Trust & Safety demonstrated, above everything else, your incredible commitment to the community as well as leadership in communicating complex problems and solutions to the team.” (2022 Review)</i>
          </p>

          <InlineImage 
            src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/portraits/aaron_mitchell_portrait_graffiti.jpg"
            position="left"
            label="Hosier Lane in Melbourne, Australia. 2018"
          /> 

          <p>
          From August 2017 to March 2020 I was the primary designer on the growth team as we worked to maximise new bookings through CRO and SEO initiatives. My biggest achievement in the growth space was in my influence on how it was run and projects prioritised. <i>“... [Aaron] transformed the way the Growth PM team works with UX and approaches work … taking the Growth product space from a fairly reactive one, to a more customer focused, strategic product space.” (2019 Review)</i>
          </p>

          <p>
          Two of my most impactful projects include designing an experience for customers to edit a booked service which reduced the operational costs of our customer service team by 30%, and designing the ‘extended care’ feature that addressed a long standing complaint that sitters were not being properly compensated for extra care they provided and increased our average overnight booking value an additional $0.41 - $0.95, estimated to generate between $2.1m and $5m in incremental Rover take in 2022 in the US alone.
          </p>
          <p>
          I am a member of the Rover Product DEI Committee, where I worked to provide educational content to the product team, built a library of inclusive product design resources, defined how to incorporate DEI into the design process, and created the DEI focus group, a new workshop rhythm to identify potential biases in our projects. 
          </p>
          <p>
          In 2019, I partnered with another designer to create a north star vision for the Rover home page. We considered current challenges such as competing business objectives along with future needs Rover would have as we added new services and moved into international markets. We conducted an intensive research phase that included 13 stakeholder interviews, competitor analysis, user testing the current home page and building scenario maps to identify existing issues and opportunities. We led a design workshop to sketch concepts, and conducted 56 user tests to reach our final vision. The first wave of updates based on the redesign were launched in January 2020. The mobile homepage won handily, reducing bounce by 9% and increasing homepage to search by 3%. <i>“… the Homepage Vision work was an excellent demonstration of your ability to take on an ambiguous, extra-large size project, keep it on track, and deliver results, even without PM support for most of the effort. ” (2019 Review)</i>
          </p>

        </section>

        <section>

          <InlineImage 
            src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/portraits/aaron_mitchell_portrait_cogo_labs.jpg"
            position="right"
            label="Cogo Labs. 2015"
          />  

          <h2>Cogo Labs</h2>
          <p>
          From June 2014 to August 2017 I worked as Lead UI Designer at Cogo Labs, a startup accelerator in Cambridge, MA. I was responsible for a wide variety of tasks and ownership at all stages of the web development pipeline including Brainstorming, Brand Development, Logo Design, Wireframing, Prototyping, Web Design, Front End Development, Email Design & Development, A/B Testing and User Testing. Working at a startup accelerator allowed me to contribute to lots of diverse, fast moving projects in markets such as Social Networking, Healthcare, Financial Services, Online Dating and Apartment Rentals among others. As Lead UI Designer I was also responsible for leading the design team, which involved prioritizing and assigning design tasks, mentoring junior designers and leading the hiring process for new designers.
          </p>

        </section>

        <section>

          <h2>Liquid Wireless</h2>
          <p>
          From July 2012 to May 2014 I worked as a web designer for Liquid Wireless, a mobile marketing startup owned by Publishers Clearing House. My responsibilities included Designing Mobile Advertisements, Landings Pages, Android Apps and B2B marketing Resources as well as Email Design & Development. I managed one direct report.
          </p> 

        </section>

        <section> 

          <h2>Web Development</h2>
          <p>
          Finally, one of the most exciting skills I’ve learned in my career is Web Development using React and Redux. I first got experience working with React at Cogo Labs, and broadened my development experience in my freelance career, building sites such as <Link to="https://schillaciguitars.com/" target="_blank">schillaciguitars.com</Link> and <Link to="https://www.moosealmighty.com/" target="_blank">moosealmighty.com</Link>, and this very site! I have also taken the Rover Front End 101 React course, and worked closely with the Rover developers in my day-to-day work to learn about building sites at scale. Check out my github for more projects. 
          </p>

        </section>

      </div>
    )
  }
}

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Helmet from "react-helmet";

import HomeHero from '../../components/Content/HomeHero';
import GalleryHome from '../../components/Gallery/GalleryHome';

export default class Home extends Component {

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

    const gallery = [
      {
        name: "Web Development",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/logos/react__logo.jpg",
        link: "/gallery/development"
      },
      {
        name: "Design",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/design/Aaron_Mitchell_Fuck_2016_700.jpg",
        link: "/gallery/design"
      },
      {
        name: "Illustration",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/illustrations/Aaron_Mitchell_Cogo_Labs_Halloween_Shirt.jpg",
        link: "/gallery/illustration"
      },
      {
        name: "Painting",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/paintings/Aaron_Mitchell_Painting_In_Between_700.jpg",
        link: "/gallery/painting"
      },
      {
        name: "Gig Posters",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/posters/Aaron_Mitchell_King_Gizzard_Sinclair_Cambridge.jpg",
        link: "/gallery/posters"
      },
      {
        name: "Abstract",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/circular/Aaron_Mitchell_Circular_9.jpg",
        link: "/gallery/circular"
      },
      {
        name: "Comics",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/comics/Aaron_Mitchell_She_Wore_Razor_Red.jpg",
        link: "/gallery/comics"
      },
      {
        name: "Collage",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/collage/Aaron_Mitchell_Things_Fall_Apart.jpg",
        link: "/gallery/collage"
      },
    ]
    return (
      <div>
        <div className="site_wrapper site_wrapper--main">
          <HomeHero />
          <h2 className="headline">Galleries</h2>
          <GalleryHome gallery={gallery} />

          <div className="Home__about">
            <h1>About Me</h1>


            <div className="inline-image inline-image--right">
              <img src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/portraits/aaron_mitchell_portrait_moose_almighty.jpg" />
              <p>Performing in Moose Almighty. 2020</p>
            </div>


            <p>
            I was born in Bangor, Maine and raised in the midcoast town of Belfast. In 2011 I graduated from the New Hampshire Institute of Art in Manchester, NH with a Bachelor of Fine Arts. I majored in Illustration, focusing on both digital skills and traditional fine art mediums such as oil painting. Since July 2012, I have been working as a professional designer in the tech industry. In the last 8 years I’ve had the opportunity to work at a small mobile marketing startup (Liquid Wireless in Portland, ME. 2012 - 2014), a venture backed startup accelerator (Cogo Labs in Cambridge, MA. 2014 - 2017) and an international pet care marketplace (Rover in Seattle, WA. 2017 - 2020). I’ve learned skills at every stage of the product development pipeline including UX/UI design, wireframing, prototyping, front end development, user research, A/B testing, CRO, SEO, branding, entrepenuriship, idea generation and group facilitation among others. When not at work, you’ll find me building out my latest side project, or playing bass in my band Moose Almighty. 
            </p>

            <div className="inline-image inline-image--left">
              <img src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/portraits/aaron_mitchell_portrait_graffiti.jpg" />
              <p>Making Street Art in Melbourne, Australia. 2018</p>
            </div>

            

            <h3>Rover</h3>
            <p>
            I joined the pet care marketplace Rover as a Product Designer in August 2017. At Rover I was responsible for a wide variety of tasks including UX/UI design, wireframing, prototyping, user research, leading design workshops and collaborating closely with Product Managers and Developers. I was the primary designer on the growth team as we tried to maximize new bookings through CRO and SEO initiatives, although I frequently contributed to other areas of the product as well. My biggest achievement in the growth space was in my influence on how it was run and projects prioritized. “... [Aaron] transformed the way the Growth PM team works with UX and approaches work … taking the Growth product space from a fairly reactive one, to a more customer focused, strategic product space.” (2019 Review)
            </p>
            <p>
            In 2019, I partnered with another designer to create a north star vision for the Rover home page. We considered current challenges such as competing business objectives along with future needs Rover would have as we added new services and moved into international markets. We conducted an intensive research phase that included 13 stakeholder interviews, competitor analysis, user testing the current home page and building scenario maps to identify existing issues and opportunities. We led a design workshop to sketch concepts, and conducted 56 user tests to reach our final vision, which we presented to a large part of the Rover product team. The first wave of updates based on the redesign were launched in January 2020. While the desktop test was inconclusive due to technical problems, the mobile homepage won handily, reducing bounce by 9% and increasing homepage to search by 3%. “… the Homepage Vision work was an excellent demonstration of your ability to take on an ambiguous, extra-large size project, keep it on track, and deliver results, even without PM support for most of the effort. ” (2019 Review) 
            </p>
            <p>
            Other notable projects I worked on include designing a new experience for unauthenticated users on our mobile apps, numerous CRO improvements to our search and sitter profile pages, redesigning our careers page, and adding the ability to edit a booked service on Rover which reduced operational costs of our customer service team by 30%. 
            </p>

            
            <div className="inline-image inline-image--right">
              <img src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/portraits/aaron_mitchell_portrait_cogo_labs.jpg" />
              <p>Cogo Labs. 2015</p>
            </div>


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
            Finally, one of the most exciting skills I’ve learned in my career is Web Development using React and Redux. I first got experience working with React at Cogo Labs, and broadened my development experience in my freelance career, building sites such as https://schillaciguitars.com/ and https://www.moosealmighty.com/, along with this very site! While I didn’t do any development at Rover, I did take the Rover Front End 101 React course, and worked closely with the Rover developers in my day to day work to learn about building sites at scale. Check out my github for more projects. 
            </p>
          </div>

          <div className="Home__contact center">
            <h1 className="big-headline">Want to talk?</h1>
            <Link to="contact">
              <div className="btn btn--300 centered">
                Send me a message
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}


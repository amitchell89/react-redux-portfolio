import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Helmet from "react-helmet";

import HomeAbout from '../../components/Content/HomeAbout';
import HomeHero from '../../components/Content/HomeHero';
import BackgroundShapes from '../../components/Content/BackgroundShapes';
import GalleryHome from '../../components/Gallery/GalleryHome';
import GalleryHomeWork from '../../components/Gallery/GalleryHomeWork';

export default class Home extends Component {

  componentDidMount() {
    // Fade In
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;

    window.requestAnimationFrame(function() {
      elem.style.transition = "opacity 500ms";
      elem.style.opacity = 1;
    });

    // Reduce shape opacity on scroll
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var opacity = -scroll/700 + 2;

    document.getElementById('BackgroundShapes').style.opacity = opacity;
  };

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
          <div className="elevate-above-shapes">
            <HomeHero />

            <h2>Work Samples</h2>
            <GalleryHomeWork />

            <h2 className="headline">Galleries</h2>
            <GalleryHome gallery={gallery} />


            <HomeAbout />

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
        <BackgroundShapes />
      </div>
    )
  }
}


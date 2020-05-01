import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Helmet from "react-helmet";

import HomeAbout from '../../components/Content/HomeAbout';
import HomeHero from '../../components/Content/HomeHero';
import BackgroundShapes from '../../components/Content/BackgroundShapes';
import GalleryHome from '../../components/Gallery/GalleryHome';
import GalleryHomeCaseStudy from '../../components/Gallery/GalleryHomeCaseStudy';

export default class Home extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Reduce shape opacity on scroll
  handleScroll = () => {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var opacity = -scroll/700 + 2;

    document.getElementById('BackgroundShapes').style.opacity = opacity;
  };

  render() {

    const gallery = [
      {
        name: "Web Development",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/covers/react_logo.png",
        link: "/gallery/development"
      },
      {
        name: "Design",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/covers/schillaci_guitars_logo_background.jpg",
        link: "/gallery/design"
      },
      {
        name: "Illustration",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/illustrations/Aaron_Mitchell_Cogo_Labs_Halloween_Shirt.jpg",
        link: "/gallery/illustration"
      },
      {
        name: "Painting",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/paintings/Aaron_Mitchell_Painting_Reach_700.jpg",
        link: "/gallery/paintings"
      },
      {
        name: "Gig Posters",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/posters/Aaron_Mitchell_King_Gizzard_Sinclair_Cambridge.jpg",
        link: "/gallery/posters"
      },
      {
        name: "Abstract",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/covers/abstract_art_cover.jpg",
        link: "/gallery/circular"
      },
      // {
      //   name: "Comics",
      //   url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/comics/Aaron_Mitchell_She_Wore_Razor_Red.jpg",
      //   link: "/gallery/comics"
      // },
      {
        name: "Collage",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/collage/Aaron_Mitchell_Things_Fall_Apart.jpg",
        link: "/gallery/collage"
      },
      {
        name: "Photos",
        url: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/photos/Aaron_Mitchell_Boston_By_Boat.jpg",
        link: "/gallery/photos"
      },
    ]
    return (
      <div>
        <div className="site_wrapper site_wrapper--main">
          <div className="elevate-above-shapes">
            <HomeHero />

            <h2>Case Studies</h2>
            <GalleryHomeCaseStudy />

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


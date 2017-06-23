import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import Helmet from "react-helmet";

import About from '../components/about';
import GalleryHome from '../components/galleryHome';

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
        name: "UI / UX / Code",
        url: "projects/logos/react__logo.jpg",
        link: "/projects"
      },
      {
        name: "Design",
        url: "design/Aaron_Mitchell_Fuck_2016_700.jpg",
        link: "/gallery/design"
      },
      {
        name: "Illustration",
        url: "illustrations/Aaron_Mitchell_Cogo_Labs_Halloween_Shirt.jpg",
        link: "/gallery/illustration"
      },
      {
        name: "Painting",
        url: "paintings/Aaron_Mitchell_Painting_In_Between_700.jpg",
        link: "/gallery/painting"
      },
      {
        name: "Gig Posters",
        url: "posters/Aaron_Mitchell_King_Gizzard_Sinclair_Cambridge.jpg",
        link: "/gallery/posters"
      },
      {
        name: "Abstract",
        url: "circular/Aaron_Mitchell_Circular_9.jpg",
        link: "/gallery/circular"
      },
      {
        name: "Comics",
        url: "comics/Aaron_Mitchell_She_Wore_Razor_Red.jpg",
        link: "/gallery/comics"
      },
      {
        name: "Collage",
        url: "collage/Aaron_Mitchell_Things_Fall_Apart.jpg",
        link: "/gallery/collage"
      },
    ]
    return (
      <div>
        <About />
        <GalleryHome gallery={gallery} />
        <div className="Home__contact center">
          <h2 className="headline">Want to talk?</h2>
          <Link to="contact">
            <div className="btn btn--300 centered">
              Send me a message
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

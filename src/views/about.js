import React, {Component} from 'react';
import { Link } from 'react-router'
import Helmet from "react-helmet";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="about--portrait"></div>
        <div className="about--copy">
          <Helmet title="Aaron Mitchell: About" />
          <p>
            Hello! My name is Aaron Mitchell and I'm a User Interface Designer working at Cogo Labs, a startup incubator in Cambridge, MA. My primary responsibilities include designing websites and emails, front end coding and branding work for new projects and verticals. Before joining Cogo Labs in June 2014 I worked as a web designer for Liquid Wireless, a mobile marketing startup owned by Publishers Clearing House.
          </p>
          <p>
            I graduated Summa Cum laude from the New Hampshire Institute of Art in 2011 with a major in Illustration. While my primary focus is working digitally, I've also studied oil painting and have shown my work in several exhibitions.
          </p>
          <p> Want to talk? <Link to="contact">Send me a message</Link></p>
        </div>
      </div>
    )
  }
}
import React, {Component} from 'react';
import { Link } from 'react-router';
import Helmet from "react-helmet";

import GalleryHero from '../../components/Gallery/GalleryHero';
import GalleryNav from '../../components/Gallery/GalleryNav';

export default class CaseStudy extends Component {
  render() {
    return (
      <div className="CaseStudy">
        <GalleryHero />

        <div className="site_wrapper site_wrapper--main">

          <div className="col__left">
            <GalleryNav />
          </div>
          <div className="col__right">

            <div>
              <h1>Case Studies</h1>
            </div>

          </div>
       
        </div>
      </div>
    )
  }
}

        // <Helmet
        //     title="Aaron Mitchell: Terms of Service"
        //     meta={ [
        //     { name: "description", content: this.props.route.meta.meta_terms },
        //     { property: "og:title", content: 'Aaron Mitchell\'s Online Portfolio: Case Studies'},
        //     { property: "og:url", content: 'https://mitchellaaron.com/terms/'},
        //   ] }
        // />
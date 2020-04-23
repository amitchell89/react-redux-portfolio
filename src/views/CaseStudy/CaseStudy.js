import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Helmet from "react-helmet";

import GalleryHero from '../../components/Gallery/GalleryHero';
import GalleryNav from '../../components/Gallery/GalleryNav';

function mapStateToProps(state) {
   return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

class CaseStudy extends Component {

  componentDidMount() {
    let study = this.props.params.study;
  }

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

export default connect(mapStateToProps, mapDispatchToProps)(CaseStudy);

        // <Helmet
        //     title="Aaron Mitchell: Terms of Service"
        //     meta={ [
        //     { name: "description", content: this.props.route.meta.meta_terms },
        //     { property: "og:title", content: 'Aaron Mitchell\'s Online Portfolio: Case Studies'},
        //     { property: "og:url", content: 'https://mitchellaaron.com/terms/'},
        //   ] }
        // />
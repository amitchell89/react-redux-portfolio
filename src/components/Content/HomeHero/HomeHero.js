import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class HomeHero extends Component {

  render() {
    return (
      <div className="HomeHero">
        <div className="HomeHero__copy">
          <h1 className="big-headline">Hello! My name is Aaron Mitchell, and I am a Designer living in Seattle, WA. <a href="#HomeAbout">Learn More</a></h1>
        </div>
        <div className="HomeHero__portrait"></div>
      </div>
    )
  }
}

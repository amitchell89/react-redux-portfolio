import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class About extends Component {

  render() {
    return (
      <div className="About">
        <div className="About--copy">
          <h1 className="big-headline">Hello! My name is Aaron Mitchell, and I am a Designer living in Seattle, WA</h1>
        </div>
        <div className="About--portrait"></div>
      </div>
    )
  }
}

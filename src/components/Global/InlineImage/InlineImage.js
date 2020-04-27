import React, {Component} from 'react';
import { Link } from 'react-router';

export default class InlineImage extends Component {

  render() {

    const { src, label, position } = this.props;

    let positionClass = null;

    if (position === 'left') {
      positionClass = 'inline-image inline-image--left';
    }
    else if (position === 'right') {
      positionClass = 'inline-image inline-image--right';
    } 
    else if (position === 'full') {
      positionClass = 'inline-image inline-image--full-width';
    } 
    else {
      positionClass = 'inline-image';
    }

    return (
      <div className={positionClass}>
        <img src={src} />
        <p>{label}</p>
      </div>
    )
  }
}

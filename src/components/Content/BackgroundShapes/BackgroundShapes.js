import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class BackgroundShapes extends Component {

  render() {
    return (
      <div className="BackgroundShapes">
        <div className="BackgroundShapes__Shape BackgroundShapes__Shape--1"></div>
        <div className="BackgroundShapes__Shape BackgroundShapes__Shape--2"></div>
        <div className="BackgroundShapes__Shape BackgroundShapes__Shape--3"></div>
        <div className="BackgroundShapes__Shape BackgroundShapes__Shape--4"></div>
      </div>
    )
  }
}

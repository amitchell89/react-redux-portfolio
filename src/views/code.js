import React, {Component} from 'react';
import { Link } from 'react-router'
import { Projects } from '../store/constants/projects'

export default class Code extends Component {
  render() {

    let projects = (
      <div>
        {Projects.map(function (s, i) {

          let url = s.url == true ? <div><a href={s.url_link}>{s.url_link}</a></div> : <div>{s.url_link}</div>
          let git = s.git == true ? <div><a href={s.git_link}>{s.git_link}</a></div> : <div>{s.git_link}</div>

          return (
          <div>
            <h4>{s.name}</h4>
            {url}
            {git}
            <p>{s.about}</p>
          </div>
        )}.bind(this))}
      </div>
    )
    return (
      <div>
        <h2>
        Code Portfolio
        </h2>
        <p>
        As a UI Designer I have worked on websites from wireframe to design to coding the front end. I have experience working with HTML, CSS, Javascript, Jade, Haml, Sass, Stylus, React, Redux, Flux, Node, jQuery, Ruby on Rails, WordPress and Php. I have extensive experience doing responsive web design and designing, coding and debugging html emails. I have also done design work for iPhone and Android apps.
        </p>
        <p>
        Below is a list of projects I have worked on as both a freelancer and as an employee at Cogo Labs.
        </p>
        {projects}
      </div>
    )
  }
}
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import Helmet from "react-helmet";

function mapStateToProps(state) {
   return {
    projects: state.projects
  };
}
class Projects extends Component {

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
    var { projects } = this.props;

    projects = projects.filter(function(n) {
      return n.hidden !== true;
    });

    let projectsList = (
      <div>
        {projects.map(function (s, i) {

          let url = s.url ? <a className="project__link" href={s.url} target="_blank">Website</a> : null;
          let git = s.git ? <a className="project__link" href={s.git} target="_blank">Git</a> : null;
          let wireframe = s.wireframe ? <a className="project__link" href={s.wireframe} target="_blank">Wireframe</a> : null;
          let mockup = s.mockup ? <a className="project__link" href={s.mockup} target="_blank">Mockup</a> : null;
          let styleGuide = s.styleGuide ? <a className="project__link" href={s.styleGuide} target="_blank">Style Guide</a> : null;

          let bkgdImg = {
            backgroundImage: 'url(../images/' + s.image + ')',
          }

          return (
          <div className="project">
            <div className="project__img" style={bkgdImg}></div>
            <div className="project__info">
              <h4>{s.name}</h4>
              <div className="project__links">{url} {git} {wireframe} {mockup} {styleGuide}</div>
              <p>{s.about}</p>
            </div>
          </div>
        )}.bind(this))}
      </div>
    )

    return (
      <div>
        <Helmet
          title="Aaron Mitchell: Project Portfolio"
          meta={ [
            { name: "description", content: this.props.route.meta.meta_code },
            { property: "og:title", content: 'Aaron Mitchell\'s Online Portfolio: Coding Projects'},
            { property: "og:url", content: 'https://mitchellaaron.com/code/'},
          ] }
        />
        <div className="code__header">
          <h2>
          Project Portfolio
          </h2>
          <p>
          As a UI Designer I have worked on websites from wireframe to design to coding the front end. I have experience working with HTML, CSS, Javascript, Jade, Haml, Sass, Stylus, React, Redux, Vue, Flux, Node, jQuery, Ruby on Rails, WordPress and Php. I have extensive experience doing responsive web design and designing, coding and debugging html emails. I have also done design work for iPhone and Android apps.
          </p>
          <p>
          Below is a list of projects I have worked on as both a freelancer and as an employee at Cogo Labs. For more information on a project, or to request wireframes and mockups, please <Link to="contact">send me a message</Link>.
          </p>
        </div>
        {projectsList}
      </div>
    )
  }
}
export default connect(mapStateToProps)(Projects);
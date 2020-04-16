import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Helmet from "react-helmet";

export default class Contact extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    // Fade In
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "opacity 500ms";
      elem.style.opacity = 1;
    });
  }
  
  render() {

    return (
      <div className="contact">
        <Helmet
          title="Aaron Mitchell: Contact"
          meta={ [
            { name: "description", content: this.props.route.meta.meta_contact },
            { property: "og:title", content: 'Aaron Mitchell\'s Online Portfolio: Contact the Artist'},
            { property: "og:url", content: 'https://mitchellaaron.com/contact/'},
          ] }
          />
        <h2>
        Contact
        </h2>
        <p>Want to talk? Send me a message and let's get the conversation started.</p>
        <form id="contact_form" method="post">
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Your Name"></input>
          <label>Your Email Address</label>
          <input type="text" name="email" placeholder="Your Email"></input>
          <label>Your Message</label>
          <textarea type="text" name="message" placeholder="Your Message" rows="7"></textarea>
          <button type="submit" form="contact_form" value="Submit" className="btn">Send Message</button>
        </form>
      </div>
    )
  }
}
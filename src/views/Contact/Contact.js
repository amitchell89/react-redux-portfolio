import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Helmet from "react-helmet";

export default class Contact extends Component {
  
  render() {

    return (
      <div>
        <Helmet
          title="Aaron Mitchell: Contact"
          meta={ [
            { name: "description", content: this.props.route.meta.meta_contact },
            { property: "og:title", content: 'Aaron Mitchell\'s Online Portfolio: Contact the Artist'},
            { property: "og:url", content: 'https://mitchellaaron.com/contact/'},
          ] }
        />
        <div className="site_wrapper site_wrapper--main">
          <div className="contact">

            <div className="contact__form">
              <h2>
              Contact
              </h2>
              <p>Want to talk? Send me a message and let's get the conversation started.</p>
              <form id="contact_form" method="post">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Your Name" required></input>
                <label>Your Email Address</label>
                <input type="email" name="email" placeholder="Your Email" required></input>
                <label>Your Message</label>
                <textarea type="text" name="message" placeholder="Your Message" rows="7" required></textarea>
                {/* Honeypot: hidden from people, but spam bots fill it in and the server discards those messages */}
                <div className="contact__hp" aria-hidden="true">
                  <label>Leave this field empty</label>
                  <input type="text" name="website" tabIndex="-1" autoComplete="off"></input>
                </div>
                <button type="submit" form="contact_form" value="Submit" className="btn btn--contact">Send Message</button>
              </form>
            </div>

            <div className="contact__art">
              <img src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/paintings/Aaron_Mitchell_Painting_What_Did_You_Say_700.jpg" />
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}
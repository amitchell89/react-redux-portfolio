import React, {Component} from 'react';

export default class Contact extends Component {
  render() {

    return (
      <div className="contact">
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
          <button type="submit" form="contact_form" value="Submit" className="btn--contact">Send Message</button>
        </form>
      </div>
    )
  }
}
import React, {Component} from 'react';

export default class Contact extends Component {
  render() {

    return (
      <div className="contact">
        <h2>
        Contact
        </h2>
        <p>Want to talk? Send me a message and let's get the conversation started.</p>
        <label>Your Name</label>
        <input placeholder="Your Name"></input>
        <label>Your Email Address</label>
        <input placeholder="Your Email"></input>
        <label>Your Message</label>
        <textarea placeholder="Your Message" rows="7"></textarea>
        <button className="btn--contact" onclick={this.props.transporter.sendMail}>Send Message</button>
      </div>
    )
  }
}
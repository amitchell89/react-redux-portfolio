import React, {Component} from 'react';
import { Link } from 'react-router'

export default class Privacy extends Component {
  render() {
    return (
      <div>
        <h2>
        Privacy Policy
        </h2>
        <p>
        Last Updated 12/22/2016
        </p>
        <p>
            We do not store your data. All information collected via the <Link to="contact">contact form</Link> ('name', 'email', 'message') is used to generate an automated message sent to Aaron Mitchell, the site owner and administrator. Information sent in this manner is used solely for the purpose of contacting and following up on inquiries from said form. This data is not collected in a database. We do not sell or otherwise distribute this data. Any changes to the collection of data that expand upon these uses will result in an updated privacy policy at that time.
        </p>

      </div>
    )
  }
}
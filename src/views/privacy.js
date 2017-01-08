import React, {Component} from 'react';
import { Link } from 'react-router'
import Helmet from "react-helmet";

export default class Privacy extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Aaron Mitchell: Privacy Policy"
          meta={ [
            { name: "description", content: this.props.route.meta.meta_privacy },
            { property: "og:title", content: 'Aaron Mitchell\'s Online Portfolio: Privacy Policy'},
            { property: "og:url", content: 'https://mitchellaaron.com/privacy/'},
          ] }
        />
        <h2>
        Privacy Policy
        </h2>
        <p>
        Last Updated 12/22/2016
        </p>
        <p>
          We do not store your data. All information collected via the <Link to="contact">contact form</Link> ('name', 'email', 'message') is used to generate an automated message sent to Aaron Mitchell, the site owner and administrator. Information sent in this manner is used solely for the purpose of contacting and following up on inquiries from said form. This data is not collected in a database. We do not sell or otherwise distribute this data. Any changes to the collection of data that expand upon these uses will result in an updated privacy policy at that time.
        </p>
        <h4>Google Analytics</h4>
        <p>
        Like millions of other website owners, I use Google Analytics on mitchellaaron.com. Google Analytics is a piece of software that grabs data about visitors to this site. It’s something like an advanced server log. It will record what website you came from to get here and what kind of computer you’re using among other things. The tracking information allows me to better understand the kind of people who come to my site and what content they’re viewing. This allows me to make better decisions about improving this website. Occasionally, I will compile aggregate statistics about the number of visitors this site receives and browsers being used. No personally identifying data is included in this type of reporting. All data collected by Google Analytics is stored and maintained by Google, not me. All of my activity falls within the bounds of the <a href="https://www.google.com/analytics/terms/us.html" target="_blank">Google Analytics Terms of Service.</a>
        </p>

      </div>
    )
  }
}
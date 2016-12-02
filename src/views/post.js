import React, {Component} from 'react';
import { Link } from 'react-router';
import NotFound from './notFound'

export default class Post extends Component {

  componentWillMount() {
    this.setState({status: this.props.location.query.post || null})
  }

  render() {
    if (this.state.status !== 'success' && this.state.status !== 'fail') {
      return <NotFound />
    }
    let postMessage = 'Your Message Has been sent! Thanks for reaching out.'
    let returnToContact = null

    if (this.state.status == 'fail') {
      postMessage = 'I\'m sorry. There was an issue and your message did not send.'
      returnToContact = (
        <p>
          <br />
          <Link to="/contact">Try Sending Your Message Again</Link>
        </p>
      )
    }
    return (
      <div>
        <h3>
        {postMessage}
        </h3>
        {returnToContact}
        <p><Link to="/">Return to Home</Link></p>
      </div>
    )
  }
}
import React, {Component} from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
   return {
    isAuthenticated: state.authentication.isAuthenticated,
  };
}

class GalleryLockIcon extends Component {
  render() {

  	const { isAuthenticated } = this.props;

    return (
    	<div>
	    	{ !isAuthenticated ?
		  		<div className="GalleryLockIcon">
		        <div className="GalleryLockIcon__Lock"></div>
		        <div className="GalleryLockIcon__Background"></div>
		      </div>
	      : null
	    	}
    	</div>
    )
  }
}

export default connect(mapStateToProps)(GalleryLockIcon);
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../store/actions/ToggleModal'

function mapStateToProps(state) {
   return {};
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: (e) => {
      dispatch(closeModal(e))
    }
  }
}

class Modal extends Component {
  render() {

    return (
      <div className="modal">
        <div className="site_wrapper">
          <button onClick={this.props.closeModal}>Close Modal</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
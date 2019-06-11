// 3rd party libs
import React, { Component } from 'react';

// components
import Aux from '../../hoc/Aux/Aux';
import BackDrop from '../../UI/Backdrop/Backdrop';

// styles
import classes from './Modal.scss';

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    return (
      <Aux>
        <div
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
          className={ classes.Modal }>
          { this.props.children }
        </div>
        <BackDrop
          modalClosed={ this.props.closedModal }
          show={ this.props.show } />
      </Aux>
    )
  }  
}

export default Modal;
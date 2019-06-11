// 3rd party libs
import React, { Component } from 'react';

// components
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../hoc/Aux/Aux';

// styles
import classes from './SideDrawer.scss';


class SideRdawer extends Component {
  render() {
    let attachedClasses = [classes.SideDrawer, classes.Close];
  
    if (this.props.show) {
      attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
      <Aux>
        <div className={attachedClasses.join(' ')}>
          <div className={ classes.Logo }>
            <Logo />
          </div>
          <NavigationItems />
        </div>
        <BackDrop
          show={ this.props.show }
          modalClosed={ this.props.closedModal } />
      </Aux>
    )
  }
}

export default SideRdawer;
// 3rd party libs
import React, { Component } from 'react';

// components
import Aux from '../Aux/Aux';
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';

// style
import classes from './Layout.scss';

class Layout extends Component {
  state = {
    sideDrawStatus: false
  }

  closeSideDrawHandler = () => {    
    this.setState((prevState) => {
      return { sideDrawStatus: !prevState.sideDrawStatus };
    })
  }

  openSideDrawHandler = () => {    
    this.setState((prevState) => {
      return { sideDrawStatus: !prevState.sideDrawStatus };
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar showSideDrawer={ this.openSideDrawHandler } />
        <SideDrawer
          show={ this.state.sideDrawStatus }
          closedModal={ this.closeSideDrawHandler } />
        <main className={classes.Content}>
          { this.props.children }
        </main>
    
      </Aux>
    )
  }
}

export default Layout;
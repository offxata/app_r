// 3rd party libs
import React from 'react';

// styles
import classes from './DrawerToggle.scss';

const drawerToggle = (props) => (
  <div className={ classes.DrawerToggle } onClick={ props.clicked }>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default drawerToggle;
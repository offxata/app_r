// 3rd party libs
import React from 'react';

// components
import NavigationItem from './NavigationItem/NavigationItem';

// styles
import classes from './NavigationItems.scss';

const navigationItems = (props) => (
  <ul className={ classes.NavigationItems }>
    <NavigationItem link={'/'} exact>Burger Builder</NavigationItem>
    <NavigationItem link={'/orders'}>Orders</NavigationItem>
  </ul>
)

export default navigationItems;
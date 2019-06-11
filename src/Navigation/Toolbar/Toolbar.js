// 3rd party libs
import React from 'react';

// components
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

// styles
import classes from './Toolbar.scss'

const toolBar = (props) => (
  <header className={ classes.Toolbar }>

    <DrawerToggle clicked={ props.showSideDrawer } /> 


    <div className={ classes.Logo }>
      <Logo />
    </div>
    <div className={ classes.DesktopOnly }>
      <NavigationItems />
    </div>
    
  </header>
)

export default toolBar;
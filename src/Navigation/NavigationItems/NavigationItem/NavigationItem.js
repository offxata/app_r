// 3rd party libs
import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import classes from './NavigationItem.scss';

const navigationItem = (props) => (
  <li className={ classes.NavigationItem }>
    <NavLink activeClassName={classes.active} exact={props.exact} to={props.link}>{ props.children }</NavLink>
  </li>
)

export default navigationItem;
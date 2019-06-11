// 3rd party libs
import React from 'react';

// styles
import classes from './Logo.scss';
import LogoBurger from '../assets/images/burger-logo.png';

const logo = (props) => (
  <div className={ classes.Logo }>
    <img src={ LogoBurger } alt="LogoBurger" />
  </div>
)

export default logo;
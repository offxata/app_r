// 3rd party libs
import React from 'react';

// styles
import classes from './Modal.scss';

const modal = (props) => (
  <div className={ classes.Modal }>
    { props.children }
  </div>
)

export default modal;
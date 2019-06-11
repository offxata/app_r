// 3rd party libs
import React from 'react';

// styles
import classes from './BackDrop.scss';

const backDrop = (props) => (
  props.show ? <div
    onClick={ props.modalClosed }
    className={ classes.Backdrop }></div> : null
)

export default backDrop;
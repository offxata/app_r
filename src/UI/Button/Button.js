// 3rd party libs
import React from 'react';

// styles
import classes from './Button.scss';

const button = (props) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={ props.clicked }
    type="button">{ props.children }</button>
)

export default button;
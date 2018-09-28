// 3rd party libs
import React from 'react';

// styles
import classes from './BuildControl.scss';

const buildControl = (props) => {
  return (
    <div className={ classes.BuildControl }>
      <div className={ classes.Label }>{ props.label }</div>
      <button
        type="button"
        disabled={ props.disabled }
        onClick={ props.removed }
        className={ classes.Less }>Less</button>
      <button
        type="button"
        className={ classes.More }
        onClick={ props.added }>More</button>
    </div>
  )
}

export default buildControl;
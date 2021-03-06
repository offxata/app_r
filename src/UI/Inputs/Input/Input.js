// 3rd party libs
import React from 'react';

// styles
import classes from './Input.scss';

const input = (props) => {
  let inputElement =null;

  switch(props.elementType) {
    case ('input'):
      inputElement = <input
        className={classes.InputElement}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}/>;
      break;
    case('textare'):
      inputElement = <textarea
        className={classes.InputElement}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}/>
      break;
    case('select'):
      inputElement = (<select
          className={classes.InputElement}
          onChange={props.changed}>
          {props.elementConfig.options.map(x => {
            return <option key={x.value} value={x.value}>{x.displayValue}</option>
          })}
        </select>)
      break;
    default:
      inputElement = <textarea
        className={classes.InputElement}
        {...props.elementConfig}
        value={props.value} />
  }



  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default input;
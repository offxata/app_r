// 3rd party libs
import React from 'react';

// components
import BuildControl from './BuildControl/BuildControl';

// styles
import classes from './BuildControls.scss';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>${ props.price.toFixed(2) }</p>
    { controls.map((ctrl, i) => {
      return <BuildControl
              disabled={ props.disabled[ctrl.type] }
              removed={ () => props.ingredientRemoved(ctrl.type) }
              added={ () => props.ingredientAdded(ctrl.type) }
              key={ ctrl.label }
              label={ ctrl.label } />
    }) }

    <button
      type="button"
      className={ classes.OrderButton }
      disabled={ !props.purchasable }>ORDER NOW</button>
  </div>
)

export default buildControls;
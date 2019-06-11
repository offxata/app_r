// 3rd party libs
import React from 'react';

// components
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={ igKey }> 
          <span style={ { textTransform: 'capitalize' } }>{ igKey }</span>:  { props.ingredients[igKey] }
        </li>
      );
    });


  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientsSummary }
      </ul>
      <p>Total Price: <strong>${ props.price.toFixed(2) }</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={ props.closedModal }>Danger</Button>
      <Button btnType="Success" clicked={ props.continuePurchase }>Success</Button>
    </Aux>
  )
}

export default orderSummary;
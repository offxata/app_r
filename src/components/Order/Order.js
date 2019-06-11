// 3rd party libs
import React from 'react';

// style
import classes from './Order.scss';

const order = (props) => {
  let ingredients = [];

  for (let key in props.ingredients) {
    ingredients.push({name: key, among: props.ingredients[key] });
  }

  const ingredientOutput = ingredients.map(ig => {
    return <span className={classes.Ingredients} key={ig.name}>{ig.name} ({ig.among})</span>
  })

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price <strong>USD {props.price.toFixed(2)}</strong></p>
    </div>
  )
}

export default order;
// 3rd party libs
import React from 'react';

// components
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// styles
import classes from './Burger.scss';

const Burger = (props) => {

  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
          return <BurgerIngredient key={ igKey + i } type={ igKey }/>
        });
    });
    
  console.log(transformedIngredients);
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      { transformedIngredients }
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default Burger;
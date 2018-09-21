// 3rd party libs
import React from 'react';

// components
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// styles
import classes from './Burger.scss';

const Burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
          return <BurgerIngredient key={ igKey + i } type={ igKey }/>
        });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>please, start adding ingredients</p>;
  }
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      { transformedIngredients }
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default Burger;
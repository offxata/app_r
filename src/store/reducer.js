import * as actionsType from './actions';

const initState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0
  },
  totalPrice: 4
}

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

const reducer = (state = initState, actions) => {
  switch(actions.type) {
    case actionsType.ADD_INGREDIENT:    
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [actions.ingredientName]: state.ingredients[actions.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[actions.ingredientName]
      }
    case actionsType.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients:{
          ...state.ingredients,
          [actions.ingredientName]: state.ingredients[actions.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[actions.ingredientName]
      }
    default:
      return state;
  }
}

export default reducer;
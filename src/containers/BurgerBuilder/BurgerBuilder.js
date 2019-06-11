// 3rd party libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
// components
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal'
import OrderSammary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

// other
import * as actionTypes from '../../store/actions';

// api
import axios from '../../axios-orders';

// const INGREDIENT_PRICES = {
//   salad: 0.5,
//   cheese: 0.4,
//   meat: 1.3,
//   bacon: 0.7
// }

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      purchasing: false,
      loading: false
    }
  }

  componentDidMount() {
    // axios.get('/ingredients.json')
    //   .then(response => {
    //     this.setState({ingredients: response.data});
    //   })
  }

  updatePurchesStatus (ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return sum > 0;
  }

  purchaseHandler = () => {    
    this.setState({purchasing: true});
  }

  purchaseCanceledHandler = () => {    
    this.setState({ purchasing: false });
  }

  getData() {
    this.props.sendData(this.state.purchasing);
  }

  purchaseContinueHandler = () => {
    // const queryParams = [];

    // this.setState({loading: true});

    // for (let i in this.state.ingredients) {
    //   queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    // }

    // queryParams.push('price=' + this.props.prc);

    // this.props.history.push({
    //   pathname: '/checkout',
    //   search: '?' + queryParams.join('&')
    // });
    this.props.history.push('/checkout');
  }

  render() {
    const disabledInfo = {
      ...this.props.ings
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSammary =null;

    if (this.state.loading) {
      orderSammary = <Spinner />;
    }
    
    let burger = <Spinner />;

    if (this.props.ings) {
      burger = (
                <Aux>
                  <Burger ingredients={ this.props.ings } />
                  <BuildControls
                    price={ this.props.prc }
                    purchasable={ this.updatePurchesStatus(this.props.ings) }
                    disabled={ disabledInfo }
                    ordered={ this.purchaseHandler }
                    ingredientRemoved={ this.props.removeIngredient }
                    ingredientAdded={ this.props.addIngredient } />
                </Aux>
              );

      orderSammary = <OrderSammary
                      price={ this.props.prc }
                      continuePurchase={ this.purchaseContinueHandler } 
                      closedModal={ this.purchaseCanceledHandler }
                      ingredients={ this.props.ings } />;
    }

    return (
      <Aux show={ this.state.purchasable }>
        { burger }
        <Modal
          closedModal={ this.purchaseCanceledHandler }
          show={ this.state.purchasing }>
          { orderSammary }
        </Modal>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    prc: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addIngredient: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
    removeIngredient: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));
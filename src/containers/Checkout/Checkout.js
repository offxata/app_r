// 3rd pary libs
import React, { Component } from 'react';
import {Route} from 'react-router-dom';

// components
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

// reducer
import { connect } from 'react-redux';

class Checkout extends Component {
  // state = {
  //   ingredients: {
  //     salad: 0,
  //     meat: 0,
  //     cheese: 0,
  //     becon: 0
  //   },
  //   totalPrice: 0
  // }

  // componentDidMount() {
  //   const searchParams = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   let totalPrice = 0;

  //   for (let param of searchParams.entries()) {
  //     if (param[0] === 'price') {
  //       totalPrice = +param[1];
  //     } else {
  //       ingredients[param[0]] = +param[1];
  //     }
  //   }

  //   this.setState({ingredients: ingredients, totalPrice: totalPrice})
  // }

  cencel = () => {
    this.props.history.goBack();
  }
  
  continue = () => {
    this.props.history.push(this.props.match.path + '/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ings}
          cencel={this.cencel}
          continue={this.continue} />
        <Route
          path={this.props.match.path + '/contact-data'}
          component={ContactData}/>
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    ings: state.ingredients
  }
}

export default connect(mapStatetoProps)(Checkout);
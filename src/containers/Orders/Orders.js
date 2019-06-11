// 3rd party libs
import React, {Component} from 'react';

// components
import  Order from '../../components/Order/Order';

// API
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

class Orders extends Component {

  state = {
    orders: [],
    loading: true
  }

  
  componentDidMount() {
    axios.get('/orders.json')
      .then(response => {
        const fetchedOrders = [];

        for (let key in response.data ) {
          fetchedOrders.push({
            ...response.data[key],
            id: key
          });
        }

        this.setState({loading: false, orders: fetchedOrders});
      })
      .catch(error => {
        this.setState({loading: false});
        console.log(error);
      });
  }

  render() {
    let order = <p>There are no orders</p>

    if (!this.state.loading && this.state.orders.length !== 0) {
      order = this.state.orders.map(order => {
        return <Order
                  key={order.id}
                  ingredients={order.ingredients}
                  price={order.price}></Order>
      })
    }
    return (
      <div>
        {order}
      </div>
    )
  }
}

export default WithErrorHandler(Orders, axios);
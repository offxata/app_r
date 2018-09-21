// 3rd party libs
import React, { Component } from 'react';

// components
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

// styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
       </Layout>
      </div>
    );
  }
}

export default App;

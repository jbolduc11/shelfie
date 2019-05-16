import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Forms from './Components/Forms/Forms'
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'

class App extends Component {
  render(){
    return (
      <div className="App">
        Dashboard
        Forms
        Header 
        Product
      </div>
    );
  }
}

export default App;

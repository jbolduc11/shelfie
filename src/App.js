import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard'
import Forms from './Components/Forms/Forms'
import Header from './Components/Header/Header'


class App extends Component {
  render(){
    return (
      <div className="App">
        <Dashboard/>
        <Forms/>
        <Header/> 
      </div>
    );
  }
}

export default App;

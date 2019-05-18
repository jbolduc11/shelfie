import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard'
import Forms from './Components/Forms/Forms'
import Header from './Components/Header/Header'


// import './base.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this);
  }
  componentDidMount() {
    this.getInventory();
  }
  getInventory() {
    axios.get('/api/inventory')
      .then(res => this.setState({ inventory: res.data }))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Forms getInventory={this.getInventory} />
        <Dashboard inventory={this.state.inventory} />
      </div>
    );
  }
}

export default App;


import React, {Component} from 'react';
import './Dashboard.css';
import Product from '../Product/Product';

class Dashboard extends Component {
    render() {
        return (
          <div className='Dashboard'>
            {this.props.inventory.map((el) => {
              return <Product key={el.id} item={el} />
            })}
          </div>
        );
      }
    }

export default Dashboard;
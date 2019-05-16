import React, {Component} from 'react';
import './Dashboard.css';
import Product from '../Product/Product';

class Dashboard extends Component {
    render(){
        return (
            <div className="Dashboard">
                Dashboard
                <Product/>
            </div>
        );
    }
}

export default Dashboard;
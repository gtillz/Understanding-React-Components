import React, { Component } from 'react';
import PropTypes from 'prop-types';

const borderStyle = {
    boxShadow: "0 10px 20px rgba(183,28,28,.19), 0 6px 6px rgba(183,28,28,0.23)",
};

class Product extends Component {
    //methods

    modalClickHandler = ()=>{
        this.props.renderComponent('Product');
    }

    render() {
        const {name, price, availibility} = this.props;
        return (
            <li style={borderStyle}>   
                <div className="collapsible-header">
                    <span>{`${name}: `}</span>
                    <span className='right-align'>{`$${price}`}</span>
                </div>
                <div className="collapsible-body">
                    <a onClick={this.modalClickHandler} className="waves-effect waves-light btn modal-trigger  red darken-4" href="#modal1">See Code</a>
                </div>
            </li>
        );
    }
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    availibility: PropTypes.bool.isRequired,
    renderComponent: PropTypes.func.isRequired,
};

export default Product;
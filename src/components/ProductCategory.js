import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Product} from './components';

const borderStyle = {
    boxShadow: "0 10px 20px rgba(3,155,229,.19), 0 6px 6px rgba(3,155,229,0.23)"
};

const padding = {
    paddingBottom: '15px'
};

class ProductCategory extends Component {
    //methods

    modalClickHandler = ()=>{
        this.props.renderComponent('ProductCategory');
    }

    render() {
        const {category, renderComponent, searchInput, filteredProducts} = this.props;
        const {department, products} = category;
        return (
            <li style={borderStyle}>
                <div className="collapsible-header">
                    <h6>{department}</h6>
                </div>
                <ul className="collapsible popout " data-collapsible="accordion" style={padding}>
                {
                    (filteredProducts) ?
                        filteredProducts.map((product, index)=>{
                            return <Product key={product.item} name={product.item} price={product.price} availibility={product.inStock} renderComponent={renderComponent}/>
                        }) 
                    :
                        products.map(product=>{
                            return <Product key={product.item} name={product.item} price={product.price} availibility={product.inStock} renderComponent={renderComponent}/>
                        }) 
                }   
                </ul>
                <div className="collapsible-body">
                    <a onClick={this.modalClickHandler} className="waves-effect waves-light btn modal-trigger light-blue darken-1" href="#modal1">See Code</a>
                </div>
            </li>
        );
    }
}

ProductCategory.propTypes = {
    searchInput: PropTypes.string.isRequired,
    category: PropTypes.object.isRequired,
    renderComponent: PropTypes.func.isRequired,
    filteredProducts: PropTypes.array.isRequired,
};

export default ProductCategory;
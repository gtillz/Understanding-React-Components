import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Product} from './components';

const styles = {
    borderStyle: {
        boxShadow: "0 10px 20px rgba(3,155,229,.19), 0 6px 6px rgba(3,155,229,0.23)"    
    },
    padding: {
        paddingBottom: '15px'
    },
    productHeading: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        fontSize: '1.2rem'
    }
}

class ProductCategory extends Component {
    //methods

    modalClickHandler = ()=>{
        this.props.renderComponent('ProductCategory');
    }

    render() {
        const {category, renderComponent, filteredProducts} = this.props;
        const {department, products} = category;
        return (
            <li style={styles.borderStyle}>
                <div className="collapsible-header" style={styles.productHeading}>
                    <div>{department}</div>
                </div>
                <ul className="collapsible popout" data-collapsible="accordion" style={styles.padding}>
                {
                    (!!filteredProducts.length) ?
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
    category: PropTypes.object.isRequired,
    renderComponent: PropTypes.func.isRequired,
    filteredProducts: PropTypes.array.isRequired,
};

export default ProductCategory;
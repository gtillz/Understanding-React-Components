import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ProductCategory} from './components';

const styles = {
    borderStyle: {
        boxShadow: "0 10px 20px rgba(118,255,3,.19), 0 6px 6px rgba(118,255,3,0.23)"        
    },
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        fontWeight: 'bold',     
    },
    itemLeft: {
        marginLeft: '4em' 
    },
    itemRight: {
        marginRight: '4em' 
    }
}

class Directory extends Component {

    //methods

    modalClickHandler = ()=>{
        this.props.renderComponent('Directory');
    }

    render() {
        const {inventory, renderComponent, searchInput} = this.props;

        return (
            <li className='directory row' style ={styles.borderStyle}>
                <div className="collapsible-header" style={styles.header}>
                    <div style={styles.itemLeft}>Item</div>
                    <div style={styles.itemRight}>Price</div>
                </div>
                <ul className="collapsible popout" data-collapsible="accordion">
                {
                    inventory.map((category, i)=>{
                        let filteredProducts = category.products.filter(product=>{
                            return  product.item.toLowerCase().includes(searchInput.toLowerCase()) ||
                                    product.price.toString().includes(searchInput);
                        });             
                        return !!filteredProducts.length && <ProductCategory key={i} category={category} renderComponent={renderComponent} searchInput={searchInput} filteredProducts={filteredProducts}/>
                    })
                }
                </ul>
                <div className="collapsible-body">
                    <a onClick={this.modalClickHandler} className="waves-effect waves-light btn modal-trigger light-green accent-3" href="#modal1">See Code</a>
                </div>
            </li>
        );
    }
}

Directory.propTypes = {
    inventory: PropTypes.array.isRequired,
    renderComponent: PropTypes.func.isRequired,
    searchInput: PropTypes.string.isRequired,
};

export default Directory;
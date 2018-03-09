import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Directory, Form} from './components';

const borderStyle = {
    boxShadow: "0 10px 20px rgba(255,193,7,.19), 0 6px 6px rgba(255,193,7,0.23)",
};

const padding = {
    paddingTop: '15px',
    paddingBottom: '15px'
};

class Inventory extends Component {

    //methods
    modalClickHandler = ()=>{
        this.props.renderComponent('Inventory');
    }
    
    render() {
        const {inventory, renderComponent, onChange, searchInput} = this.props;
        return (
            <li style={borderStyle}>
                <div className="collapsible-header">
                    <h6>Understanding React Components</h6>
                </div>
                <ul className="collapsible popout" data-collapsible="accordion" style={padding}>
                    <Form renderComponent={renderComponent} onChange={onChange}/>
                    <Directory inventory={inventory} renderComponent={renderComponent} searchInput={searchInput}/>
                </ul>
                <div className="collapsible-body">
                    <a onClick={this.modalClickHandler} className="waves-effect waves-light btn modal-trigger amber darken-1" href="#modal1">See Code</a>
                </div>
            </li>
        );
    }
}

Inventory.propTypes = {
    inventory: PropTypes.array.isRequired,
    renderComponent: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    searchInput: PropTypes.string.isRequired,
};

export default Inventory;
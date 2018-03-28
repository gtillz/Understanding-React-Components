import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    borderStyle: {
        boxShadow: "0 10px 20px rgba(69,39,160,.19), 0 6px 6px rgba(69,39,160,0.23)"   
    },
    form: {
        minHeight: '6rem',
    },
    input: {
        maxWidth: '75%',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
    }
};

class Form extends Component {

    //methods

    modalClickHandler = ()=>{
        this.props.renderComponent('Form');
    }

    render() {
        return (
        <li style={styles.borderStyle}>
            <div className="collapsible-header input-field" style={styles.form}>
                <input id="last_name" onChange={this.props.onChange} type="text" style={styles.input} placeholder='Search Products'></input>
            </div>
            <div className="collapsible-body">
                <a onClick={this.modalClickHandler} className="waves-effect waves-light btn modal-trigger deep-purple darken-3" href="#modal1">See Code</a>
            </div>
        </li>
        );
    }
}

Form.propTypes = {
    renderComponent: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Form;
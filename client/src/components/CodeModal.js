import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CodeModal extends Component {
    render() {
        const {componentName, code} = this.props;
        return (
            <div id="modal1" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h4>{`<${componentName}/>`}</h4>    
                    <code>
                        {
                            code.map((line, index)=>{
                                return <p key={index} className='left-align'>{line}</p>
                            })
                        }  
                    </code>
                </div>
                <div className="modal-footer">
                    <a className="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
                </div>
            </div>
        );
    }
}

CodeModal.propTypes = {
    componentName: PropTypes.string.isRequired,
    code: PropTypes.array.isRequired,

};

export default CodeModal;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../componets/AppFrame';
import CustomerEdit from '../componets/CustomerEdit';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { insertCustomer } from '../actions/insertCustomers';
import { SubmissionError } from 'redux-form';

class NewCustomerContainer extends Component {
    handleSubmit = values =>{
        this.props.insertCustomer(values).then(r=>{
            if (r.payload && r.payload.error) {
                throw new SubmissionError(r.payload)
            }
        })
    }
    handleOnSubmitSuccess = () =>{
        this.props.history.goBack()
    }
    handleOnback = () =>{
        this.props.history.goBack()
    }
    renderBody = () =>{
        const newCustomer = {
            "id":"",
            "dni":"",
            "name":"",
            "age":0,
        }
        return <CustomerEdit {...newCustomer} onSubmit ={this.handleSubmit} 
                    onSubmitSuccess ={this.handleOnSubmitSuccess}
                    onBack={this.handleOnback}>
                    </CustomerEdit>
    }
    render() {
        return (
            <div>
                <AppFrame header={"Creacion Nuevo  Cliente"}
                    body={this.renderBody()}></AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    insertCustomer:PropTypes.func.isRequired,
};

export default withRouter( connect(null,{ insertCustomer }) (NewCustomerContainer));
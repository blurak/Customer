import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import AppFrame from '../componets/AppFrame';
import {connect} from 'react-redux'
import CustomerList from '../componets/CustomerList'
import CustomerActions from '../componets/CustomerActions';
import { fetchCustomers } from '../actions/fetchCustomers';
import { getCustomers } from '../selectors/customers';

class CustomersContainer extends Component {
    componentDidMount() {
        if (this.props.customers.length === 0){
        this.props.fetchCustomers();
        }
    }
    handleAddNew =() =>{
        this.props.history.push('/customers/new')
    }
    renderBody = customers =>(
        <div>
        
        <CustomerList  customers ={customers} urlPatch={'customers/'}></CustomerList>
        <CustomerActions>
            <button onClick={this.handleAddNew}>Nuevo Cliente</button>
        </CustomerActions>
        </div>
    )
    render() {
        return (
            <div>
                <AppFrame
                header={'Listado Clientes'}   
                body ={this.renderBody(this.props.customers)} 
                ></AppFrame>
            </div>
        );
    }
}
CustomersContainer.propTypes ={
    fetchCustomers:PropTypes.func.isRequired,
    customers:PropTypes.array.isRequired,

};
CustomersContainer.defaultProps ={
    customers: []
};
const mapStateToProps = state =>({
    customers: getCustomers(state)
})



export default withRouter(connect(mapStateToProps,{fetchCustomers})(CustomersContainer));
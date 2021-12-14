import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../componets/AppFrame';
import { getCustomersByDni } from '../selectors/customers';
import {Route, withRouter} from 'react-router-dom'
import CustomerEdit from '../componets/CustomerEdit'
import CustomerData from '../componets/CustomerData'
import { fetchCustomers } from '../actions/fetchCustomers';
import { updateCustomers } from '../actions/updateCustomers';
import { SubmissionError } from 'redux-form';
import { deleteCustomers } from '../actions/deleteCustomers';


class CustomerContainer extends Component {
    componentDidMount (){
        if(!this.props.customer){
            this.props.fetchCustomers();
        }
    }
    handleSubmit = values =>{
        console.log("Datos",JSON.stringify(values));
        
        this.props.updateCustomers(values).then(v =>{

            this.props.history.goBack();
        } ).catch(error=>{
        console.log("error",error);

        });
        
            
        
    }
    HandleOnDelete = id =>{
        console.log("oprimio")
        this.props.deleteCustomers(id).then(v =>{
            this.props.history.goBack();
        } );
        
    }
    HandleOnBack = () =>{
        this.props.history.goBack();
    }
    handleonSubmitSuccess = () =>{
        
    }
    renderCustomerControl =(isEdit,isDelete)=>{
        if (this.props.customer){
            const CustomerControl = isEdit ? CustomerEdit:CustomerData;
        
            return <CustomerControl {...this.props.customer} 
                    onSubmit={this.handleSubmit} 
                    onSubmitSuccess={this.handleonSubmitSuccess}
                    onBack={this.HandleOnBack}
                    isDeleteAllow={!!isDelete}
                    onDelete={this.HandleOnDelete}/>
        
        }
        return null;
    }
    renderBody =() =>(
        
        <Route path ="/customers/:dni/edit" children={
            ({match: isEdit})=>(
                <Route path ="/customers/:dni/del" children={
                    ({match:isDelete})=>(          
                        this.renderCustomerControl(isEdit,isDelete)) 
             }/>)
        }/>
    ) 
    render() {
        console.log("Customers",this.props.customer);
        return (
            <div>
                <AppFrame header={`Cliente  ${this.props.dni}`}
                    body={
                        this.renderBody()
                    }
                    
                >

                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer :PropTypes.object,
    fetchCustomers:PropTypes.func.isRequired,
    updateCustomers:PropTypes.func.isRequired,
    deleteCustomers: PropTypes.func.isRequired,
};
const mapStateToProps = (state,props) =>({    
    customer: getCustomersByDni(state,props) 

});
export default withRouter( connect(mapStateToProps,{
    fetchCustomers,
    updateCustomers,
    deleteCustomers
})(CustomerContainer));
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Prompt } from 'react-router-dom';
import { withRouter} from 'react-router-dom'
import swal from 'sweetalert';
import { apiLog } from '../api';
import { urlLog } from '../api/url';
import { logCustomers } from '../actions/logeoCustomer';
import { connect } from 'react-redux';




const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "El campo nombre es requerido";

    }

    if (!values.dni) {
        error.dni = "El Dni es un campo obligatorio";
    }

    return error;
};




const toLower = value => value && value.toLowerCase();


class CustomerLogin extends Component {


    componentDidMount() {
      if(this.txt){
          this.txt.focus();
      }
    }
    MostrarAlerta =()=>{
        swal("Credenciales Incorrectas", "Verifica tu informacion", "error"         
            )
    }
    handleSubmit =  (event) =>{
        
        event.preventDefault();
       // console.log("Datos",JSON.stringify(values));
       const name =  event.currentTarget[0].value
        const password = event.currentTarget[1].value
        this.props.logCustomers(name,password).then(v =>
            {if (v.payload === "") {
                console.log("Es nulo",v)  
                {this.MostrarAlerta() }         
              }else{
                  this.props.history.push('/customers')}})            
        .catch(error=>{
        console.log("error",error);
       
        
    });
    }
    
      
      
         
    HandleOnBack = () =>{
        this.props.history.goBack();
    }
        

    renderField = ({input, meta, type, label, name, withFocus}) => {
        const controls = {...input,value: input [ "value"] || ""}
       return( <div>
            <label htmlFor={name}>{label}</label>
            <input {...input} 
                    type={!type ? "text" : type}
                    ref={withFocus && (txt => { this.txt = txt;} ) } />
            {
                meta.touched && meta.error && <span>{meta.error}</span>
            }
        </div>)
    };
    RenderAge = value =>(
        value === 50 && "La Edad no puede ser mayor a 50 "
    );
    RenderisRequired = value =>(
        !value && "Este Campo Es Requerido"
    );
    RenderisNumber= value =>(
        isNaN(Number(value))&& "Este Campo debe ser un numero"
    );

    render() {
        
        const { submitting,  pristine } = this.props;
        console.log ("Que llega ",this.props)
        return (
            <div >
                <h2>Login Cliente</h2>
                <form onSubmit={this.handleSubmit}>
                    <Field 
                        withFocus
                        validate={this.RenderisRequired}
                        name="name"                         
                        component={this.renderField} 
                        label="name"                        
                        format={toLower} ></Field>
                    <Field                         
                        name="password" 
                        type="password"
                        component={this.renderField} 
                        validate={this.RenderisRequired}
                        label="password"
                        ></Field>       
                        <button type ="submit" disabled ={pristine || submitting}>Aceptar</button>
                                
                </form>
            </div>
        );        
    }
};

CustomerLogin.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    logCustomers:PropTypes.func.isRequired,
  
};
const CustomerLoginFrom= reduxForm({ form: 'CustomerLogin',validate})((CustomerLogin)); 


export default withRouter (connect(null,{logCustomers})(CustomerLoginFrom))


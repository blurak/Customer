import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitials } from '../helpers/setPropsAsInitials';
import CustomerActions from './CustomerActions';

import { Prompt } from 'react-router-dom';
import { connect } from 'react-redux';



const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);

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



const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
const onlyGrow = (value, previousValue, values) => 
    value && (!previousValue ? value : (value  < 50 ? value : 50 ));

class CustomerEdit extends Component {


    componentDidMount() {
      if(this.txt){
          this.txt.focus();
      }
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
        
        const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;
        console.log ("Que llega ",this.props)
        return (
            <div>
                <h2>Edición del cliente</h2>
                <form onSubmit={handleSubmit}>
                    <Field 
                        withFocus
                        validate={this.RenderisRequired}
                        name="name" 
                        component={this.renderField} 
                        label="Nombre"
                        
                        format={toLower} ></Field>
                    <Field                         
                        name="dni" 
                        component={this.renderField} 
                        validate={this.RenderisRequired,this.RenderisNumber}
                        label="Dni"
                        ></Field>
                    <Field name="age" 
                        component={this.renderField} 
                        type="number"
                        validate={this.RenderisNumber,this.RenderAge}
                        label="Edad"
                        parse={toNumber}
                        normalize={onlyGrow}
                        ></Field>
                    <CustomerActions>
                        <button type ="submit" disabled ={pristine || submitting}>Aceptar</button>
                        <button type ="button"  disabled ={submitting} onClick={onBack}>Cancelar</button>
                    </CustomerActions>
                   
                    <Prompt
                        when={!pristine && !submitSucceeded}
                        message="Se perderán los datos si continúa"></Prompt>
                </form>
            </div>
        );        
    }
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
  
};
const CustomerEditFrom= reduxForm({ form: 'CustomerEdit',validate})((CustomerEdit)); 


export default setPropsAsInitials(CustomerEditFrom)
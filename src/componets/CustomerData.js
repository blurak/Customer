import React from 'react';
import PropTypes from 'prop-types';
import CustomerActions from './CustomerActions';
import { accesControl } from '../helpers/accesControl';
import { CUSTOMER_VIEW } from '../constants/permmission';

const CustomerData = ({id,name ,dni, age,onBack,isDeleteAllow,onDelete}) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del Cliente</h2>
                    <div><strong>Nombre</strong><i>{name}</i></div>
                    <div><strong>Dni</strong><i>{dni}</i></div>
                    <div><strong>Edad</strong><i>{age}</i></div>
               
            </div>
            <CustomerActions>
                        
                <button onClick={onBack}>Cancelar</button>
                {isDeleteAllow && <button onClick={()=>onDelete(id)}>elminar</button>}

            </CustomerActions>
        </div>
    );
};

CustomerData.propTypes = {
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    onBack:PropTypes.func.isRequired,
    isDeleteAllow:PropTypes.bool,
    onDelete:PropTypes.func,
};

export default accesControl([CUSTOMER_VIEW])(CustomerData);
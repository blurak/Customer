import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomerList = ({customers,urlPatch}) => {
    
    return (
        
            <div className="customers-list">
                
                {

                    customers.map(c =>
                        
                        <CustomerListItem
                        key={c.dni}
                        name={c.name}  
                        dni={c.dni}                     
                        editAction={'Editar'}
                        delAction ={'Eliminar'}
                        urlPatch={urlPatch} />

                        )
                }
                
            </div>
        
    );
};

CustomerList.propTypes = {
    urlPatch: PropTypes.string.isRequired,
    customers: PropTypes.array.isRequired,
    
};

export default CustomerList;
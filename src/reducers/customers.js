import { handleActions } from "redux-actions";
import { DELETE_CUSTOMERS, FECHT_CUSTOMERS, INSERT_CUSTOMERS, LOG_CUSTOMERS, UPDATE_CUSTOMERS } from "../constants";
import { CUSTOMER_EDIT, CUSTOMER_LIST, CUSTOMER_VIEW } from "../constants/permmission";

export const user = handleActions({
    [LOG_CUSTOMERS]: (state,action) =>({
        permissions:[CUSTOMER_LIST,CUSTOMER_VIEW,CUSTOMER_EDIT]
    })
},[])
export const customers = handleActions(
    {[FECHT_CUSTOMERS]: (state,action) =>[...action.payload],
    [UPDATE_CUSTOMERS]: (state,action) => {
        const customerPayload = action.payload;
        const { id } = customerPayload;     
        const customers = state;
        const newCustomers = customers.reduce((acc,customer)=>{
            if (customer.id === id){
               return [...acc,customerPayload]
            }else{
                return [...acc,customer]
            }
            
        },[])
        
    },
    [INSERT_CUSTOMERS]: (state,action) =>[...state,action.payload],
    [DELETE_CUSTOMERS]: (state,action) =>state.filter(c=> c.id !== action.payload)

},[]);
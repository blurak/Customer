import { combineReducers } from "redux";
import {customers,user} from './customers'
import { reducer as reduxForm} from 'redux-form'


export default combineReducers(
    {
        customers,
        form: reduxForm,
        user
    }
);
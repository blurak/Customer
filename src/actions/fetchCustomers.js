import{ FECHT_CUSTOMERS} from '../constants/index'
import {createAction}  from 'redux-actions'
import { getApi } from '../api';
import { urlCustomers } from '../api/url';


export const fetchCustomers = createAction(FECHT_CUSTOMERS,getApi(urlCustomers));

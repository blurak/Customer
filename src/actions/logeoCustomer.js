import{ LOG_CUSTOMERS} from '../constants/index'
import {createAction}  from 'redux-actions'
import { apiLog, getApi } from '../api';
import { urlLog } from '../api/url';



export const logCustomers = createAction(LOG_CUSTOMERS,(name,password)=>apiLog(urlLog,name,password)());

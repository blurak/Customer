import { createAction } from "redux-actions";
import { apiPut } from "../api";
import { urlCustomers } from "../api/url";
import { UPDATE_CUSTOMERS } from "../constants";

export const updateCustomers = createAction(UPDATE_CUSTOMERS,
    (id,customer)=>apiPut(urlCustomers,id,customer)());
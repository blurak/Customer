import { createAction } from "redux-actions";
import { apiDelete } from "../api";
import { urlCustomers } from "../api/url";
import { DELETE_CUSTOMERS } from "../constants";

export const deleteCustomers = createAction(DELETE_CUSTOMERS,
    (id)=>apiDelete(urlCustomers,id)());
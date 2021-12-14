import { createAction } from "redux-actions";
import { apiDelete } from "../api";
import { urlCustomers, urlEliminar } from "../api/url";
import { DELETE_CUSTOMERS } from "../constants";

export const deleteCustomers = createAction(DELETE_CUSTOMERS,
    (id)=>apiDelete(urlEliminar,id)());
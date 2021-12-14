import { createAction } from "redux-actions";
import { apiPost } from "../api";
import { urlCrear, urlCustomers } from "../api/url";
import { INSERT_CUSTOMERS } from "../constants";

export const insertCustomer = createAction(INSERT_CUSTOMERS,
    customer => apiPost(urlCrear,customer)());
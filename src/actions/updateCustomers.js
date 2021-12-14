import { createAction } from "redux-actions";
import { apiPut } from "../api";
import { urlCustomers, urlUpdate } from "../api/url";
import { UPDATE_CUSTOMERS } from "../constants";

export const updateCustomers = createAction(UPDATE_CUSTOMERS,
    (customer)=>apiPut(urlUpdate,customer)());
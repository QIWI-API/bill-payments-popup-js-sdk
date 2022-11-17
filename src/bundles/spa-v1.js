import {extractCreateInvoiceParams, extractOpenInvoiceParams, extractPreorderParams} from "../helpers";
import {showCheckoutPopup} from "../index";

export const createInvoice = (params = {}) => {
    const invoiceParams = extractCreateInvoiceParams(params);
    return showCheckoutPopup({params: invoiceParams, type: "CHECKOUT"});
};

export const openInvoice = (params = {}) => {
    const invoiceParams = extractOpenInvoiceParams(params);
    return showCheckoutPopup({params: invoiceParams, type: "CHECKOUT"});
};

export const openPreorder = (params = {}) => {
    const preorderParams = extractPreorderParams(params)
    return showCheckoutPopup({params: preorderParams, type: "PREORDER"});
}
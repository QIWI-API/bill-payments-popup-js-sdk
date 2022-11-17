import {extractCreateInvoiceParams, extractOpenInvoiceParams} from "../helpers";
import {showCheckoutPopup} from "../index";
import {themes} from "../themes/themes";

export const createInvoice = (params = {}) => {
    const invoiceParams = extractCreateInvoiceParams(params);
    return showCheckoutPopup({params: invoiceParams, type: "CHECKOUT", theme: themes.v2});
}

export const openInvoice = (params = {}) => {
    const invoiceParams = extractOpenInvoiceParams(params);
    return showCheckoutPopup({params: invoiceParams, type: "CHECKOUT", theme: themes.v2});
};
import qs from 'qs';
import moment from 'moment';

const extractSharedParams = params =>
  ['billId', 'phone', 'email', 'account', 'comment', 'lifetime', 'customFields'].reduce(
    (acc, key) => {
      const value = params[key];
      if (value) {
        if (key === 'lifetime') {
          acc[key] = moment(value).format('YYYY-MM-DDThhmm')
        } else {
          acc[key] = value;
        }
      }
      return acc
    }, {}
  );

export const extractCreateInvoiceParams = params => {
  const publicKey = params['publicKey'];
  const amount = params['amount'];

  if (publicKey && amount) {
    return {
      queryParams: { publicKey, amount, ...extractSharedParams(params) },
      page: 'create'
    };
  } else {
    throw new Error('Invalid publicKey or amount');
  }
};

export const extractOpenInvoiceParams = params => {
  const payUrl = params['payUrl'];
  let invoiceUid

  try {
    const url = new URL(payUrl);
    const queryString = url.search.slice(1);
    invoiceUid = qs.parse(queryString).invoiceUid || qs.parse(queryString).invoice_uid;
  } catch (e) {
    throw new Error('Invalid payUrl');
  }

  if (invoiceUid) {
    return {
      queryParams: { invoiceUid },
      page: 'form'
    };
  } else {
    throw new Error('Invalid payUrl');
  }
};

export const extractPreorderParams = (params) => {
  const widgetAlias = params['widgetAlias'];

  if (widgetAlias) {
    return {
      widgetAlias
    };
  } else {
    throw new Error('Invalid widget alias');
  }
}
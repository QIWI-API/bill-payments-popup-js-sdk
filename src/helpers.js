import qs from 'qs';
import moment from 'moment';

const extractParams = (params, availableParams) =>
  availableParams.reduce(
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
  const availableParams = ['billId', 'phone', 'email', 'account', 'comment', 'lifetime', 'customFields', 'paySource']
  
  if (!params['publicKey'] || !params['amount']) {
    throw new Error('Invalid publicKey or amount');
  }

  return {
    queryParams: { ...params, ...extractParams(params, availableParams) },
    page: 'create'
  };
};

export const extractOpenInvoiceParams = params => {
  const payUrl = params['payUrl'];
  const availableParams = ['paySource']
  let queryParams;

  try {
    const url = new URL(payUrl);
    const queryString = url.search.slice(1);
    queryParams = qs.parse(queryString)
  } catch (e) {
    throw new Error('Invalid payUrl');
  }

  if (!queryParams.invoiceUid && !queryParams.invoice_uid) {
    throw new Error('Invalid payUrl');
  }

  return { queryParams: { ...queryParams, ...extractParams(params, availableParams) }, page: 'form' };
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
import qs from 'qs';

const extractSharedParams = params =>
  ['billId', 'phone', 'email', 'account', 'comment', 'lifetime'].reduce(
    (acc, key) => {
      const value = params[key];
      if (value) {
        acc[key] = value;
      }
      return acc
    }
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
    invoiceUid = qs.parse(queryString).invoiceUid;
  } catch (e) {
    throw new Error('Invalid payUrl');
  }

  if (invoiceUid) {
    return {
      queryParams: { invoiceUid, ...extractSharedParams(params) },
      page: 'form'
    };
  } else {
    throw new Error('Invalid payUrl');
  }
};

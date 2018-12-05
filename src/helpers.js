import qs from 'qs';

// Сюда тесты
export const extractInvoiceParams = element => {
  const sharedParams = [
    'billId',
    'phone',
    'email',
    'account',
    'comment',
    'lifetime'
  ].reduce((acc, key) => {
    const value = element.getAttribute(key);
    if (value) {
      acc[key] = value;
    }
  });

  const payUrl = element.getAttribute('payUrl');

  const publicKey = element.getAttribute('publicKey');
  const amount = element.getAttribute('amount');

  if (payUrl) {
    const url = new URL(payUrl);
    const queryString = url.search.slice(1);
    const { invoiceUid } = qs.parse(queryString);
    if (invoiceUid) {
      return { invoiceUid, ...sharedParams };
    } else {
      throw new Error('payUrl');
    }
  } else if (publicKey && amount) {
    return { publicKey, amount, ...sharedParams };
  } else {
    throw new Error('params');
  }
};

import qs from 'qs';

// TODO: Тестить сюда
export const extractInvoiceParams = rawParams => {
  const sharedParams = [
    'billId',
    'phone',
    'email',
    'account',
    'comment',
    'lifetime'
  ].reduce((acc, key) => {
    const value = rawParams[key];
    if (value) {
      acc[key] = value;
    }
  });

  const payUrl = rawParams['payUrl'];

  const publicKey = rawParams['publicKey'];
  const amount = rawParams['amount'];

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

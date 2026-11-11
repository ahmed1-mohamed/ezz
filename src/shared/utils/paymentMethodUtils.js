const WALLET_PROVIDERS = {
  vodafone_cash: { ar: 'فودافون كاش', en: 'Vodafone Cash' },
  orange_cash: { ar: 'أورنج كاش', en: 'Orange Cash' },
  etisalat_cash: { ar: 'اتصالات كاش', en: 'Etisalat Cash' },
  we_pay: { ar: 'وي باي (WE Pay)', en: 'WE Pay' },
  stc_pay: { ar: 'STC Pay (إس تي سي باي)', en: 'STC Pay' },
  smart_wallet: { ar: 'محفظة ذكية (CIB)', en: 'Smart Wallet' },
  cib_smart_wallet: { ar: 'محفظة CIB الذكية', en: 'CIB Smart Wallet' },
  fawry: { ar: 'فوري باي', en: 'Fawry Pay' },
  meeza: { ar: 'كارت ميزة', en: 'Meeza Card' },
};

export function getWalletProviderTitle(providerKey, isRtl = true) {
  if (!providerKey) return isRtl ? 'محفظة إلكترونية' : 'Mobile Wallet';
  const cleanKey = String(providerKey).toLowerCase().trim();
  const found = WALLET_PROVIDERS[cleanKey];
  if (found) return isRtl ? found.ar : found.en;
  return String(providerKey);
}

export function formatPaymentMethodInfo(method, isRtl = true) {
  if (!method || typeof method !== 'object') {
    return {
      title: isRtl ? 'حوالة بنكية / دفع' : 'Transfer / Payment',
      subtitle: '',
      accountHolder: '',
      accountNumber: '',
      typeLabel: isRtl ? 'طريقة دفع' : 'Payment Method',
      iconType: 'default',
    };
  }
  const typeStr = String(method.type || '').toLowerCase();
  const accountHolder = method.accountHolderName || method.fullName || method.name || '';
  const walletNum =
    method.walletNumber ||
    method.phoneNumber ||
    method.phone ||
    method.mobileNumber ||
    method.walletPhone ||
    (typeStr.includes('wallet') ? method.accountNumber : null) ||
    method.details?.walletNumber ||
    method.details?.phoneNumber ||
    method.details?.phone ||
    '';
  if (typeStr.includes('wallet') || Boolean(method.walletNumber) || Boolean(method.walletProvider)) {
    const providerTitle = getWalletProviderTitle(method.walletProvider || method.provider, isRtl);
    const numDisplay = walletNum ? `${isRtl ? 'رقم المحفظة: ' : 'Wallet: '}${walletNum}` : '';
    return {
      title: providerTitle,
      subtitle: numDisplay || walletNum,
      accountHolder,
      accountNumber: walletNum,
      typeLabel: isRtl ? 'محفظة إلكترونية' : 'Mobile Wallet',
      iconType: 'wallet',
    };
  }
  if (typeStr.includes('bank') || Boolean(method.bankName) || Boolean(method.iban)) {
    const bank = method.bankName || (isRtl ? 'حساب بنكي' : 'Bank Account');
    const acc = method.accountNumber ? `${isRtl ? 'حساب: ' : 'Acc: '}${method.accountNumber}` : (method.iban ? `IBAN: ${method.iban}` : '');
    return {
      title: bank,
      subtitle: acc,
      accountHolder,
      accountNumber: method.accountNumber || method.iban || '',
      typeLabel: isRtl ? 'تحويل بنكي' : 'Bank Transfer',
      iconType: 'bank',
    };
  }
  if (typeStr.includes('insta') || Boolean(method.instapayAddress)) {
    const handle = method.instapayAddress || method.username || method.handle || '';
    const instapayTitle = 'InstaPay';
    const sub = handle ? `IPA: ${handle}` : (method.bankName || '');
    return {
      title: instapayTitle,
      subtitle: sub,
      accountHolder,
      accountNumber: handle,
      typeLabel: isRtl ? 'إنستاباي' : 'InstaPay',
      iconType: 'instapay',
    };
  }
  if (typeStr.includes('paypal') || Boolean(method.paypalEmail)) {
    const email = method.paypalEmail || method.email || '';
    return {
      title: 'PayPal',
      subtitle: email ? `Email: ${email}` : '',
      accountHolder,
      accountNumber: email,
      typeLabel: 'PayPal',
      iconType: 'paypal',
    };
  }
  if (typeStr.includes('western') || Boolean(method.nationalId) || Boolean(method.nationalIdOrPassport)) {
    const nid = method.nationalId || method.nationalIdOrPassport || '';
    const location = [method.city, method.country].filter(Boolean).join(', ');
    return {
      title: isRtl ? 'ويسترن يونيون' : 'Western Union',
      subtitle: nid ? `${isRtl ? 'الرقم القومي: ' : 'ID: '}${nid}` : location,
      accountHolder,
      accountNumber: nid,
      typeLabel: isRtl ? 'ويسترن يونيون' : 'Western Union',
      iconType: 'western',
    };
  }
  const generalNum = method.accountNumber || method.number || method.address || walletNum || '';
  return {
    title: method.name || method.label || method.title || (isRtl ? 'حوالة مالية' : 'Transfer'),
    subtitle: generalNum ? `${isRtl ? 'الرقم: ' : 'No: '}${generalNum}` : '',
    accountHolder,
    accountNumber: generalNum,
    typeLabel: method.type || (isRtl ? 'طريقة دفع' : 'Payment Method'),
    iconType: 'default',
  };
}

export default formatPaymentMethodInfo;

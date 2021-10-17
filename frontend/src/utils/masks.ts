function maskBirthday(value: string): string {
  let valueMasked: string;
  valueMasked = value.replace(/\D/g, '');
  valueMasked = valueMasked.replace(/^(\d{2})(\d)/, '$1/$2');
  valueMasked = valueMasked.replace(/(\d{2})(\d)/, '$1/$2');
  return valueMasked;
}

function maskCpf(value: string): string {
  let valueMasked: string;
  valueMasked = value.replace(/\D/g, '');
  valueMasked = valueMasked.replace(/^(\d{3})(\d)/, '$1.$2');
  valueMasked = valueMasked.replace(/(\d{3})(\d)/, '$1.$2');
  valueMasked = valueMasked.replace(/(\d{3})(\d)/, '$1-$2');
  return valueMasked;
}

function maskCep(value: string): string {
  let valueMasked: string;
  valueMasked = value.replace(/\D/g, '');
  valueMasked = valueMasked.replace(/^(\d{5})(\d)/, '$1-$2');
  return valueMasked;
}

function maskPhone(value: string): string {
  const cleaned = `${value}`.replace(/\D/g, '');
  const match = cleaned.match(/^(1|)?(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    const intlCode = match[1] ? '+1 ' : '';
    const number = [
      intlCode,
      '(',
      match[2],
      ') ',
      match[3],
      '-',
      match[4],
    ].join('');
    return number;
  }
  return value;
}

function maskPhoneHide(value: string): string {
  let valueMasked: string;
  valueMasked = value.replace(/\D/g, '');
  valueMasked = value.substring(2);
  valueMasked = valueMasked.replace(/^(\d{2})(\d)/g, '(**) *');
  valueMasked = valueMasked.replace(/(\d{4})(\d{4})$/, '****-$2');
  return valueMasked;
}

function maskEmail(valor: string): string {
  const masked = valor.replace(
    /(?!^.).(?=[^@].*@)|(?:(?=^@.)|(?!^))(?=[^@]*$).(?=[^\\.].*\.)/g,
    '*',
  );
  return masked;
}

function maskCurrency(valor: string): string {
  let v = valor.replace(/\D/g, '');
  if (valor !== '') {
    v = `${(parseInt(v, 10) / 100).toFixed(2)}`;
    v = v.replace('.', ',');
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, '$1.$2.$3,');
    v = v.replace(/(\d)(\d{3}),/g, '$1.$2,');
  }
  const masked = v;
  return masked;
}

export {
  maskBirthday,
  maskCpf,
  maskPhone,
  maskPhoneHide,
  maskCep,
  maskEmail,
  maskCurrency,
};

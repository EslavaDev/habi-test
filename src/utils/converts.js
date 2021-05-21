export const convertArrayToJson = array => {
  const newArray = {};
  array.forEach(element => {
    newArray[element.id] = element;
  });
  return newArray;
};

function* generateObjectWithCount(n) {
  let num = n;
  while (true) {
    yield num;
    num += 1;
  }
}

export const formatCurrency = (countryCode, amount) => {
  const getTypeCurrency = {
    precision: 0,
    currencySymbol: '$',
  };
  const countryCurrency = {
    CO: {
      integerDivider: '.',
      decimalsDivider: ',',
      currencySymbol: '$',
    },
    MX: {
      integerDivider: ',',
      decimalsDivider: '.',
      currencySymbol: '$',
    },
    BR: {
      integerDivider: '.',
      decimalsDivider: ',',
      currencySymbol: 'R$',
    },
  };

  const formatter = (priceAmount, precision) => {
    const { integerDivider, decimalsDivider } = countryCurrency[countryCode];
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    let numberValue = priceAmount.toString();

    const [integer, decimals = ''] = numberValue.split('.');
    numberValue = integer.replace(regex, integerDivider);

    if (priceAmount % 1 !== 0 && precision > 0) {
      numberValue += `${decimalsDivider}${decimals.slice(0, precision)}`;
    }
    return numberValue;
  };

  const { currencySymbol, precision } = getTypeCurrency;
  const defaultValue = `${amount < 0 ? '-' : ''}${currencySymbol} ${formatter(Math.abs(amount), precision)}`;

  const renderValue = {
    COP: defaultValue,
  };

  return renderValue[countryCode] || defaultValue;
};

export { generateObjectWithCount };

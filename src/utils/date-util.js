const cityTimezoneMapping = {
  'WA': 'PST',
  'OR': 'PST',
  'NV': 'PST',
  'CA': 'PST',
  'MT': 'MST',
  'ID': 'MST',
  'WY': 'MST',
  'UT': 'MST',
  'CO': 'MST',
  'AZ': 'MST',
  'NM': 'MST',
  'ND': 'CST',
  'MN': 'CST',
  'WI': 'CST',
  'SD': 'CST',
  'IA': 'CST',
  'IL': 'CST',
  'NE': 'CST',
  'KS': 'CST',
  'MO': 'CST',
  'TN': 'CST',
  'OK': 'CST',
  'AR': 'CST',
  'MS': 'CST',
  'AL': 'CST',
  'TX': 'CST',
  'LA': 'CST',
  'ME': 'EST',
  'VT': 'EST',
  'NH': 'EST',
  'MA': 'EST',
  'RI': 'EST',
  'CT': 'EST',
  'NY': 'EST',
  'PA': 'EST',
  'NJ': 'EST',
  'DE': 'EST',
  'MD': 'EST',
  'DC': 'EST',
  'VA': 'EST',
  'WV': 'EST',
  'OH': 'EST',
  'MI': 'EST',
  'IN': 'EST',
  'KY': 'EST',
  'NC': 'EST',
  'SC': 'EST',
  'GA': 'EST',
  'FL': 'EST',
  'AK': 'AST',
  'HI': 'HST',
};

export const getTimezoneByState = (state) => {
  return cityTimezoneMapping[state] ?? 'UTC';
};

export const formatDateWithTimezoneFromUTCToLocale = (date, timezone) => {
  const dateStringLocale = date.toLocaleDateString({ timezone });
  const dateComponentsLocale = dateStringLocale.split('/');
  return `${dateComponentsLocale[2]}-${
    dateComponentsLocale[0].length === 1 ? `0${dateComponentsLocale[0]}` : dateComponentsLocale[0]
  }-${
    dateComponentsLocale[1].length === 1 ? `0${dateComponentsLocale[1]}` : dateComponentsLocale[1]
  }`;
};

export const formatDateWithTimezoneFromLocaleToUTC = (inputDateLocale, timezone) => {
  const date = new Date(`${inputDateLocale}${timezone}`);
  return date.toISOString();
};

export const getTimezoneByState = (state) => {
  return {
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
};

export const formatDateWithTimezone = (date, timezone) => {
  const dateString = date.toLocaleDateString({ timezone });
  const dateComponents = dateString.split('/');
  return `${dateComponents[2]}-${
    dateComponents[0].length === 1 ? '0' + dateComponents[0] : dateComponents[0]
  }-${
    dateComponents[1].length === 1 ? '0' + dateComponents[1] : dateComponents[1]
  }`;
};

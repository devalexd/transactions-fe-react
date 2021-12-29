// Source: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
const cityTimeZoneIANAMapping: {
  [k: string]: string;
} = {
  WA: 'US/Pacific',
  OR: 'US/Pacific',
  NV: 'US/Pacific',
  CA: 'US/Pacific',
  MT: 'US/Mountain',
  ID: 'US/Mountain',
  WY: 'US/Mountain',
  UT: 'US/Mountain',
  CO: 'US/Mountain',
  AZ: 'US/Mountain',
  NM: 'US/Mountain',
  ND: 'CST',
  MN: 'CST',
  WI: 'CST',
  SD: 'CST',
  IA: 'CST',
  IL: 'CST',
  NE: 'CST',
  KS: 'CST',
  MO: 'CST',
  TN: 'CST',
  OK: 'CST',
  AR: 'CST',
  MS: 'CST',
  AL: 'CST',
  TX: 'CST',
  LA: 'CST',
  ME: 'US/Eastern',
  VT: 'US/Eastern',
  NH: 'US/Eastern',
  MA: 'US/Eastern',
  RI: 'US/Eastern',
  CT: 'US/Eastern',
  NY: 'US/Eastern',
  PA: 'US/Eastern',
  NJ: 'US/Eastern',
  DE: 'US/Eastern',
  MD: 'US/Eastern',
  DC: 'US/Eastern',
  VA: 'US/Eastern',
  WV: 'US/Eastern',
  OH: 'US/Eastern',
  MI: 'US/Eastern',
  IN: 'US/Eastern',
  KY: 'US/Eastern',
  NC: 'US/Eastern',
  SC: 'US/Eastern',
  GA: 'US/Eastern',
  FL: 'US/Eastern',
  AK: 'US/Alaska',
  HI: 'US/Hawaii',
};

const cityTimeZoneAbbrMapping: {
  [k: string]: string;
} = {
  WA: 'PST',
  OR: 'PST',
  NV: 'PST',
  CA: 'PST',
  MT: 'MST',
  ID: 'MST',
  WY: 'MST',
  UT: 'MST',
  CO: 'MST',
  AZ: 'MST',
  NM: 'MST',
  ND: 'CST',
  MN: 'CST',
  WI: 'CST',
  SD: 'CST',
  IA: 'CST',
  IL: 'CST',
  NE: 'CST',
  KS: 'CST',
  MO: 'CST',
  TN: 'CST',
  OK: 'CST',
  AR: 'CST',
  MS: 'CST',
  AL: 'CST',
  TX: 'CST',
  LA: 'CST',
  ME: 'EST',
  VT: 'EST',
  NH: 'EST',
  MA: 'EST',
  RI: 'EST',
  CT: 'EST',
  NY: 'EST',
  PA: 'EST',
  NJ: 'EST',
  DE: 'EST',
  MD: 'EST',
  DC: 'EST',
  VA: 'EST',
  WV: 'EST',
  OH: 'EST',
  MI: 'EST',
  IN: 'EST',
  KY: 'EST',
  NC: 'EST',
  SC: 'EST',
  GA: 'EST',
  FL: 'EST',
  AK: 'AST',
  HI: 'HST',
};

const getTimeZoneIANAByState = (state: string): string => {
  return cityTimeZoneIANAMapping[state] ?? 'UTC';
};

const getTimeZoneAbbrByState = (state: string): string => {
  return cityTimeZoneAbbrMapping[state] ?? 'UTC';
};

export const formatDateByStateFromUTCToLocale = (date: Date, state: string): string => {
  const timeZone = getTimeZoneIANAByState(state);
  const dateStringLocale = date.toLocaleDateString('en-US', { timeZone });
  const dateComponentsLocale = dateStringLocale.split('/');
  return `${dateComponentsLocale[2]}-${
    dateComponentsLocale[0].length === 1 ? `0${dateComponentsLocale[0]}` : dateComponentsLocale[0]
  }-${
    dateComponentsLocale[1].length === 1 ? `0${dateComponentsLocale[1]}` : dateComponentsLocale[1]
  }`;
};

export const formatDateByStateFromLocaleToUTC = (inputDateLocale: string, state: string): Date => {
  const timeZone = getTimeZoneAbbrByState(state);
  return new Date(`${inputDateLocale}${timeZone}`);
};

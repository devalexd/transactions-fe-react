export type Currency = 'USD' | 'CNY';

export type Unit = 'none' | 'count' | 'pound' | 'gallon';

export type Transaction = {
  _id: string,
  name: string,
  itemId?: string,
  store: string,
  city: string,
  date: string,
  currency: Currency,
  price?: string,
  unit: Unit,
  amount?: string,
  tax?: string,
  cost: string,
  comment?: string,
};

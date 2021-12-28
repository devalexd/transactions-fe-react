import {
  Transaction,
} from './common';

export type CommonProps = {
  [k: string]: any,
};

export type SelectProps = {
  topic?: string,
  options: Array<string>,
  setId: (
    arg1: number,
  ) => any,
  defaultId?: number,
};

export type TransactionRowProps = {
  transaction: Transaction,
};

export type TransactionCardProps = {
  _id: string,
  setTransaction: (
    arg1: Transaction,
  ) => any,
};

export type TransactionCardEditProps = {
  transaction: Transaction,
  handleSave: () => any,
};

import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { getTransactionByIdQuery } from '../../../queries/getTransaction.query';
import { Transaction } from '../../../types/common';
import { formatDateByStateFromUTCToLocale } from '../../../utils/date-util';

const TransactionCard = (props: TransactionCardProps) => {
  const { _id, setTransaction: setTransactionParent } = props;

  const [transaction, setTransaction] = useState(undefined);

  const { data, loading, error } = useQuery(getTransactionByIdQuery, {
    variables: { _id },
    onCompleted: (response) => {
      const transactionDocument = {
        ...response.getTransactionById.document,
        _id,
      };
      const state = transactionDocument.city.slice(-2);
      const inputDate = new Date(Number(transactionDocument.date));
      const formattedDate = formatDateByStateFromUTCToLocale(inputDate, state);
      transactionDocument.date = formattedDate;
      setTransaction(transactionDocument);
      setTransactionParent(transactionDocument);
    },
  });

  if (error) return <h1>{`Submission error! ${error.message}`}</h1>;

  return (
    <div>
      <div>Name: {transaction?.name ?? 'Loading...'}</div>
      <div>Item Id: {transaction?.itemId ?? 'Loading...'}</div>
      <div>Store: {transaction?.store ?? 'Loading...'}</div>
      <div>City: {transaction?.city ?? 'Loading...'}</div>
      <div>Date: {transaction?.date ?? 'Loading...'}</div>
      <div>Currency: {transaction?.currency ?? 'Loading...'}</div>
      <div>Unit price: {transaction?.price ?? 'Loading...'}</div>
      <div>Unit type: {transaction?.unit ?? 'Loading...'}</div>
      <div>Amount: {transaction?.amount ?? 'Loading...'}</div>
      <div>Total tax paid: {transaction?.tax ?? 'Loading...'}</div>
      <div>Total money paid: {transaction?.cost ?? 'Loading...'}</div>
      <div>Comment: {transaction?.comment ?? 'Loading...'}</div>
    </div>
  );
};

interface TransactionCardProps {
  _id: string;
  setTransaction: (arg1: Transaction) => any;
}

export default TransactionCard;

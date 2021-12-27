import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { getTransactionByIdQuery } from '../../../queries/getTransaction.query'
import { getTimezoneByState, formatDateWithTimezone } from '../../../utils/date';

const TransactionCard = ({ _id, setTransaction: setTransactionParent }) => {
  const [transaction, setTransaction] = useState(undefined);

  const { data, loading, error } = useQuery(getTransactionByIdQuery, {
    variables: { _id },
    onCompleted: (response) => {
      const transactionDocument = {
        ...response.getTransactionById.document,
        _id,
      };
      const timezone = getTimezoneByState(transactionDocument.city.slice(-2));
      const formattedDate = formatDateWithTimezone(new Date(Number(transactionDocument.date)), timezone);
      transactionDocument.date = formattedDate;
      setTransaction(transactionDocument);
      setTransactionParent(transactionDocument);
    },
  });

  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <div>
        Name: {transaction?.name ?? 'Loading...'}
      </div>
      <div>
        Item Id: {transaction?.itemId ?? 'Loading...'}
      </div>
      <div>
        Store: {transaction?.store ?? 'Loading...'}
      </div>
      <div>
        City: {transaction?.city ?? 'Loading...'}
      </div>
      <div>
        Date: {transaction?.date ?? 'Loading...'}
      </div>
      <div>
        Currency: {transaction?.currency ?? 'Loading...'}
      </div>
      <div>
        Unit price: {transaction?.price ?? 'Loading...'}
      </div>
      <div>
        Unit type: {transaction?.unit ?? 'Loading...'}
      </div>
      <div>
        Amount: {transaction?.amount ?? 'Loading...'}
      </div>
      <div>
        Total tax paid: {transaction?.tax ?? 'Loading...'}
      </div>
      <div>
        Total money paid: {transaction?.cost ?? 'Loading...'}
      </div>
      <div>
        Comment: {transaction?.comment ?? 'Loading...'}
      </div>
    </div>
  );
}

export default TransactionCard;
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { getAllTransactionsQuery } from "../../../queries/getTransaction.query";
import TransactionRow from '../../elementals/transactions/TransactionRow';

const TransactionTable = () => {
  const [transactionsList, setTransactionsList] = useState([]);

  const { data, loading, error } = useQuery(getAllTransactionsQuery, {
    variables: { _id: 'fakeId' },
    onCompleted: (response) => setTransactionsList(response.getAllTransactions.documents),
  });

  if (error) return `Error getting all transactions! ${error.message}`;

  return (
    <div>
      Transactions:
      {
        loading
        ?
        `Loading...`
        :
        transactionsList.map((transaction, index) => (
          <TransactionRow key={`transaction-row_${index}`} transaction={transaction} />
        ))
      }
    </div>
  );
};

export default TransactionTable;

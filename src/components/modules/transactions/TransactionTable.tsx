import { useQuery } from "@apollo/client";
import { useState } from "react";
import { getAllTransactionsQuery } from "../../../queries/getTransaction.query";
import TransactionRow from '../../elementals/transactions/TransactionRow';

const TransactionTable = () => {
  const [transactionsList, setTransactionsList] = useState([]);

  const { data, loading, error } = useQuery(getAllTransactionsQuery, {
    onCompleted: (response) => setTransactionsList(response.getAllTransactions.documents),
  });

  if (error) return <h1>{`Error getting all transactions! ${error.message}`}</h1>;

  return (
    <div>
      Transactions:
      {
        loading
        ?
        <h1>Loading...</h1>
        :
        transactionsList.map((transaction, index) => (
          <TransactionRow key={`transaction-row_${index}`} transaction={transaction} />
        ))
      }
    </div>
  );
};

export default TransactionTable;

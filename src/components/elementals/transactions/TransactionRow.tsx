import { useNavigate } from 'react-router-dom';
import '../style/table-cell.css';
import './style/TransactionCell.css';
import { formatDateByStateFromUTCToLocale } from '../../../utils/date-util';
import { Transaction } from '../../../types/common';

const TransactionRow = (props: TransactionRowProps) => {
  const { transaction } = props;

  const state = transaction.city.slice(-2);
  const date = new Date(transaction.date);

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/transaction/${transaction._id.toString()}`);
  };

  return (
    <div className="table-cell-container clickable hover-shadow-box" onClick={handleRedirect}>
      <span className="table-cell--transaction_date">
        {formatDateByStateFromUTCToLocale(date, state)}
      </span>
      <span className="table-cell--transaction_name">{transaction.name}</span>
      <span className="table-cell--transaction_store">{transaction.store}</span>
      <span className="table-cell--transaction_city">{transaction.city}</span>
      <span className="table-cell--transaction_cost">${transaction.cost}</span>
    </div>
  );
};

interface TransactionRowProps {
  transaction: Transaction;
}

export default TransactionRow;

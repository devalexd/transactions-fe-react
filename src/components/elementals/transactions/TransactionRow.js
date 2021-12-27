import { useNavigate } from 'react-router-dom';
import '../style/table-cell.css';
import './style/TransactionCell.css';
import { getTimezoneByState, formatDateWithTimezoneFromUTCToLocale } from '../../../utils/date-util';

const TransactionRow = ({ transaction }) => {
  const timezone = getTimezoneByState(transaction.city.slice(-2));
  const inputDate = new Date(Number(transaction.date));
  
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/transaction/${transaction._id.toString()}`);
  };

  return (
    <div className="table-cell-container clickable hover-shadow-box" onClick={handleRedirect}>
      <span className="table-cell--transaction_date">{formatDateWithTimezoneFromUTCToLocale(inputDate, timezone)}</span>
      <span className="table-cell--transaction_name">{transaction.name}</span>
      <span className="table-cell--transaction_store">{transaction.store}</span>
      <span className="table-cell--transaction_city">{transaction.city}</span>
      <span className="table-cell--transaction_cost">${transaction.cost}</span>
    </div>
  );
};

export default TransactionRow;

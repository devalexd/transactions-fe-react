import TransactionCard from '../../components/elementals/transactions/TransactionCard';
import TransactionCardEdit from '../../components/elementals/transactions/TransactionCardEdit';
import Button from '../../components/elementals/common/Button';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ViewTransaction = ({ match = {} }) => {
  const location = useLocation();
  const { _id = location.pathname.split('/').at(-1) } = match.params ?? {};

  const [isEditing, setIsEditing] = useState(false);
  const [transaction, setTransaction] = useState(undefined);

  const switchToEdit = () => {
    if (transaction) setIsEditing(true);
  };
  const switchToView = () => {
    setIsEditing(false);
  };
  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <div>
        {
          isEditing
          ?
          <Button onClick={switchToView} text="Cancel"></Button>
          :
          <Button onClick={switchToEdit} text="Edit"></Button>
        }
      </div>
      <div>
        {
          isEditing
          ?
          <TransactionCardEdit transaction={transaction} handleSave={handleSave} />
          :
          <TransactionCard _id={_id} setTransaction={setTransaction} />
        }
      </div>
    </div>
  );
};

export default ViewTransaction;

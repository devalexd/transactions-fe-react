import TransactionCard from '../../components/elementals/transactions/TransactionCard';
import TransactionCardEdit from '../../components/elementals/transactions/TransactionCardEdit';
import Button from '../../components/elementals/common/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const ViewTransaction = ({ match }) => {
  const { _id } = match.params;
  const navigate = useNavigate();
  if (!_id) navigate('/error');

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

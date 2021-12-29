import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  function navigateCreateTransaction() {
    navigate('/transaction/new');
  }
  function navigateShowTransactions() {
    navigate('/transaction/result');
  }
  return (
    <>
      <button onClick={navigateCreateTransaction}>Create New Transaction</button>
      <button onClick={navigateShowTransactions}>Show All Transactions</button>
    </>
  );
};

export default Home;

import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Select from '../../components/elementals/common/Select';
import { createTransactionMutation } from '../../mutations/createTransaction.mutation';
import { currencyOptions, unitOptions } from '../../utils/options';
import { getTimezoneByState, formatDateWithTimezoneFromLocaleToUTC } from '../../utils/date-util';

const NewTransaction = () => {
  const [name, setName] = useState('');
  const [itemId, setItemId] = useState('');
  const [store, setStore] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [currencyId, setCurrencyId] = useState(0);
  const [price, setPrice] = useState('0');
  const [unitId, setUnitId] = useState(0);
  const [amount, setAmount] = useState('0');
  const [tax, setTax] = useState('0');
  const [cost, setCost] = useState('0');
  const [comment, setComment] = useState('');

  const [createTransaction, { data, loading, error }] = useMutation(createTransactionMutation);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleCreateTransaction = async (e) => {
    e.preventDefault();
    const timezone = getTimezoneByState(city.slice(-2));
    const _date = formatDateWithTimezoneFromLocaleToUTC(date, timezone);
    createTransaction({
      variables: {
        name,
        itemId,
        store,
        city,
        date: _date,
        currency: currencyOptions[currencyId],
        price,
        unit: unitOptions[unitId],
        amount,
        tax,
        cost,
        comment,
      },
      onCompleted: () => window.location.reload(true),
      onError: (e) => console.log(e.message),
    });
  };

  return (
    <>
      <form onSubmit={handleCreateTransaction}>
        <div id="new_transaction--name">
          Name: <input maxLength="140" onChange={(e) => setName(e.target.value)} value={name} required />
        </div>
        <div id="new_transaction--item_id">
          Item Id: <input onChange={(e) => setItemId(e.target.value)} value={itemId} />
        </div>
        <div id="new_transaction--store">
          Store: <input maxLength="40" onChange={(e) => setStore(e.target.value)} value={store} required />
        </div>
        <div id="new_transaction--city">
          City: <input maxLength="40" onChange={(e) => setCity(e.target.value)} value={city} required />
        </div>
        <div id="new_transaction--date">
          Date: <input type="date" onChange={(e) => setDate(e.target.value)} value={date} required />
        </div>
        <div id="new_transaction--currency">
          Currency: <Select topic='new_transaction--currency' options={currencyOptions} setId={setCurrencyId} required />
        </div>
        <div id="new_transaction--price">
          Unit price: <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} required />
        </div>
        <div id="new_transaction--unit">
          Unit type: <Select topic='new_transaction--unit' options={unitOptions} setId={setUnitId} />
        </div>
        {
          unitId === 0
          ?
          null
          :
          <div id="new_transaction--amount">
            Amount: <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} required />
          </div>
        }
        <div id="new_transaction--tax">
          Total tax paid: <input type="number" onChange={(e) => setTax(e.target.value)} value={tax} required />
        </div>
        <div id="new_transaction--cost">
          Total money paid: <input type="number" onChange={(e) => setCost(e.target.value)} value={cost} required />
        </div>
        <div id="new_transaction--comment">
          Comment: <input onChange={(e) => setComment(e.target.value)} value={comment} />
        </div>
        <input className="clickable" type="submit" value="Submit" />
      </form>
    </>
  )
};

export default NewTransaction;

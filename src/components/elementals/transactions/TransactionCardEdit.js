import { useMutation } from "@apollo/client";
import { useState } from "react";
import Select from "../common/Select";
import { updateTransactionMutation } from '../../../mutations/updateTransaction.mutation';
import { currencyOptions, unitOptions } from "../../../utils/options";
import { getTimezoneByState, formatDateWithTimezoneFromLocaleToUTC } from '../../../utils/date-util';

const TransactionCardEdit = ({ transaction, handleSave }) => {
  const [name, setName] = useState(transaction.name);
  const [itemId, setItemId] = useState(transaction.itemId);
  const [store, setStore] = useState(transaction.store);
  const [city, setCity] = useState(transaction.city);
  const [date, setDate] = useState(transaction.date);
  const [currencyId, setCurrencyId] = useState(Math.max(currencyOptions.indexOf(transaction.currency), 0));
  const [price, setPrice] = useState(transaction.price);
  const [unitId, setUnitId] = useState(Math.max(unitOptions.indexOf(transaction.unit), 0));
  const [amount, setAmount] = useState(transaction.amount);
  const [tax, setTax] = useState(transaction.tax);
  const [cost, setCost] = useState(transaction.cost);
  const [comment, setComment] = useState(transaction.comment);

  const [updateTransaction, { data, loading, error }] = useMutation(updateTransactionMutation);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleUpdateTransaction = async (e) => {
    e.preventDefault();
    const timezone = getTimezoneByState(city.slice(-2));
    const _date = formatDateWithTimezoneFromLocaleToUTC(date, timezone);
    updateTransaction({
      variables: {
        _id: transaction._id,
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
      onCompleted: handleSave,
      onError: (e) => console.log(e.message),
    });
  };

  return (
    <>
      <form onSubmit={handleUpdateTransaction}>
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
  );
}

export default TransactionCardEdit;

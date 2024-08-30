
import React, { useState } from 'react';
import { createExpense } from './AxiosInstance';

const LogExpense = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createExpense({ name, amount });
      setName('');
      setAmount('');
      // Optionally: Add a success message or update the expense list
    } catch (error) {
      console.error('Error logging expense:', error);
    }
  };

  return (
    <div>
      <h2>Log Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button type="submit">Log Expense</button>
      </form>
    </div>
  );
};

export default LogExpense;


import React, { useEffect, useState } from 'react';
import { fetchExpenses } from './AxiosInstance';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const response = await fetchExpenses();
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    getExpenses();
  }, []);

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>{expense.name}: {expense.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;

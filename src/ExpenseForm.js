// src/ExpenseForm.js
import React, { useState } from 'react';
import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

const ExpenseForm = () => {
  const [expense, setExpense] = useState({ amount: '', description: '', category: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const expenseData = {
      amount: expense.amount,
      description: expense.description,
      category: expense.category,
      date: new Date(),
    };

    try {
      await setDoc(doc(db, 'expenses', Date.now().toString()), expenseData);
      alert('Expense added successfully');
      setExpense({ amount: '', description: '', category: '' });
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={expense.amount}
        onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={expense.description}
        onChange={(e) => setExpense({ ...expense, description: e.target.value })}
        required
      />
      <select
        value={expense.category}
        onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        required
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Petrol">Petrol</option>
        <option value="Salary">Salary</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

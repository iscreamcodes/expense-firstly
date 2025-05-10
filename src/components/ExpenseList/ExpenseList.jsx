import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, onFilter, onDelete, onEdit }) => {
  return (
    <div className="expense-list">
        <input type="text" 
               placeholder="Filter by date (YYYY-MM-DD)"
               onChange={(e) => onFilter(e.target.value)}
         />

  <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
      
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.item}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>${parseFloat(expense.price).toFixed(2)}</td>
              <td>{expense.date}</td>
              <td className="actions">
                <button class="edit" onClick={() => onEdit(index)}><i class="fa-solid fa-pen"></i></button>
                <button class="delete"onClick={() => onDelete(index)}> <i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
          ))}
        </tbody>
        </table>

    </div>

 );
};

export default ExpenseList;
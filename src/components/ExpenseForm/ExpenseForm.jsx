import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({onAddExpense, onCancel, expenseToEdit})=>{
    const [expense, setExpense] = useState(expenseToEdit || {
        item:'',
        description:'',
        price:'',
        category:'Groceries',
        date:new Date().toISOString().split('T')[0]
    });


    const handleChange = (e) =>{
        const { name, value } = e.target;
        setExpense(prev => ({...prev,[name]: value}));
    };

    const handleSubmit = (e) =>{
     
        e.preventDefault();
        if(!expense.item || !expense.price) return;
        onAddExpense(expense);
        setExpense({
            item: '',
            description: '',
            price: '',
            category: 'Groceries',
            date: new Date().toISOString().split('T')[0]
          });
        
    };
return(
    <div className='expense-form-container'>
          <h3>Add New Expense</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label>Item:</label>
          <input
            type="text"
            name="item"
            value={expense.item}
            onChange={handleChange}
            required
          />
         </div>
         <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={expense.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Price ($):</label>
          <input
            type="number"
            name="price"
            value={expense.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select
            name="category"
            value={expense.category}
            onChange={handleChange}
          >
            <option value="Groceries">Groceries</option>
            <option value="Toiletries">Toiletries</option>
            <option value="Outfits">Outfits</option>
            <option value="Jewelry">Jewelry</option>
            <option value="Stationery">Stationery</option>
            <option value="Cuttlery">Cuttlery</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-actions">
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
        </form>
        </div>
      
       
);

};

export default ExpenseForm;   
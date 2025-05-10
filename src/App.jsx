import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from './components/ExpenseList/ExpenseList';
import CategorySidebar from './components/CategorySidebar/CategorySidebar';
import NewEntryButton from './components/NewEntryButton/NewEntryButton';

function App() {
  const [isSideVisible , setIsSideVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [editingIndex, setEditingIndex] = useState(null);
  const toggleSidebar = () => setIsSideVisible(!isSideVisible);
  const hideSidebar = () => setIsSideVisible(false);

  const handleAddExpense = (newExpense) => {
    let updatedExpenses;
    if (editingIndex !== null) {
      // Update existing
      updatedExpenses = [...expenses];
      updatedExpenses[editingIndex] = newExpense;

    } else {
      // Add new 
      console.log('j4t')
      updatedExpenses = [...expenses, newExpense];
    }
    setExpenses(updatedExpenses);
    setFilteredExpenses(updatedExpenses); // This is the key line!
    setEditingIndex(null);
    setShowForm(false);
  };

  
  const handleDelete = (index) => {
    const updated = expenses.filter((_, i) => i !== index);
    setExpenses(updated);
    setFilteredExpenses(updated);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleFilter = (filterValue) => {
    if (!filterValue) {
      setFilteredExpenses(expenses);
      return;
    }
    const filtered = expenses.filter(expense => 
      expense.date.includes(filterValue) ||
      expense.item.toLowerCase().includes(filterValue.toLowerCase()) ||
      expense.category.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredExpenses(filtered);
  };

   const handleSelectCategory = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredExpenses(expenses);
    } else {
      const filtered = expenses.filter(expense => expense.category === category);
      setFilteredExpenses(filtered);
    }
    hideSidebar();
  };
  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <button className={`menu-button ${isSideVisible ? 'active' : ''}`} onClick={toggleSidebar}>
      ☰
    </button>
    <div className="contents">
      <CategorySidebar 
        isVisible={isSideVisible}
        onSelectCategory={handleSelectCategory}
        onClose={hideSidebar}
      />
      <div className={`main ${isSideVisible ? 'inactive' : ''}`}>
        {showForm ? (
          <ExpenseForm 
            onAddExpense={handleAddExpense} 
            onCancel={() => {
              setShowForm(false);
              setEditingIndex(null); // Reset editing
            }}
            expenseToEdit={editingIndex !== null ? expenses[editingIndex] : null}
          />
        ) : (
          <>
            <ExpenseList 
              expenses={filteredExpenses} 
              onFilter={handleFilter}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
            <NewEntryButton onClick={() => {
                setShowForm(true);
            }} />

          </>
        )}
      </div>
      </div>
  </div>
);
}
export default App;

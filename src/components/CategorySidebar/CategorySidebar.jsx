import React from 'react';
import './CategorySidebar.css';

const CategorySidebar = ({ isVisible, onSelectCategory, onClose }) => {
    const categories = [
        'Groceries', 'Toiletries', 'Outfits', 
        'Jewelry', 'Stationery', 'Cuttlery'
    ];

    return(
        <div className={`category-sidebar ${isVisible ? 'show' : ''}`}>
             <h2>Category</h2>
        <div className='button-grid'>
          {categories.map((category,index)=>(
            <button 
            key={index}
            onClick={() => onSelectCategory(category)}
            >  
            {category}  
            </button>
          ))}
       </div>
     {isVisible && <div className="overlay" onClick={onClose}></div>}
    </div> 
    );
    
     };
    export default CategorySidebar;
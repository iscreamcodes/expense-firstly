import React, { useState } from 'react';
import './App.css';

function App() {

  const [isSideVisible, setIsSideVisible] = useState(false);

  const toggleSidebar = () => setIsSideVisible(!isSideVisible);
  const hideSidebar = () => setIsSideVisible(false);
  
  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      
    <button className={`menu-button ${isSideVisible ? 'sidey' : ''}`} onClick={toggleSidebar}>
      ☰
    </button>


      <div className="contents">
      <div className={`side ${isSideVisible ? 'show' : ''}`}>
          <h2>Category</h2>
        
          <div className="button-grid">
            <button>Groceries</button>
            <button>Toiletries</button>
            <button>Outfits</button>
            <button>Jewelry</button>
            <button>Stationery</button>
            <button>Cuttlery</button>
          </div>
        </div>

        <div className={`main ${isSideVisible ? 'inactive' : ''}`}>
          <input type="text" placeholder="Filter-by-date" />
          <div className="list">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Description</th>
                  <th>Approximate Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Milk</td>
                  <td>Just milk but not just any</td>
                  <td>$100</td>
                </tr>
              </tbody>
            </table>
            <button>New Entry</button>
          </div>
          </div>
          {isSideVisible && <div className="overlay" onClick={hideSidebar}></div>}
        </div>
      </div>
   
  );
}

export default App;

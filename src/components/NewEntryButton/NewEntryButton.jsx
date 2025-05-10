import React from 'react';
import './NewEntryButton.css';

const NewEntryButton = ({ onClick }) =>{
    return (
        <button className='new-entry-button' onClick={onClick}> + New Entry</button>
    );
};
export default NewEntryButton;
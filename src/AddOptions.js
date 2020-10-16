import React from 'react';
import './AddOptions.css';

function AddOptions({ handleAddOptionMain}) {
    const handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
    
        if (option) {
            handleAddOptionMain(option)
            e.target.elements.option.value = ''
        }
    }
    return (
        <div className="add__options">
            <form onSubmit={handleAddOption}>
                <input className="add__input" name="option" placeholder="Enter option here..." />
            </form>
        </div>
    )
}

export default AddOptions

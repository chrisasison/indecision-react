import React from 'react';
import Option from './Option';
import './Options.css';

function Options({ options, handleDeleteOptions }) {
    return (
        <div>
            <button onClick={handleDeleteOptions}>Remove All</button>
            {
                options.map((option) => <Option key={option} optionText={option} />)
            }
            <Option />
        </div>
    )
}

export default Options

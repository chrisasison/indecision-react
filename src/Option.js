import React from 'react';
import './Option.css';

function Option({optionText, handleDeleteOption}) {
    return (
        
        <div className="option">
            <ul>
                <li>
                    {optionText}
                    <button
                    onClick={(e) => handleDeleteOption(optionText) }
                    className="optionRemove__button"
                    >
                        x
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Option

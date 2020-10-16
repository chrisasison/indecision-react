import React from 'react';
import Option from './Option';
import './Options.css';

function Options({ options, handleDeleteOptions, handleDeleteOption, hasOption }) {
    return (
        <div className="options">
            <div className="remove__all">
                <h2>Your Options</h2>
                <button className="remove__button" onClick={handleDeleteOptions}>Remove All</button>
            </div>
            <div className="option__div">
            {
                options.map((option) =>
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={handleDeleteOption}
                    />)
            }
            </div>


        </div>
    )
}

export default Options

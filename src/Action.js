import React from 'react';
import './Action.css';

function Action({hasOptions, handlePick}) {
    return (
        <div className="action">
            <button
                className="action__button"
                onClick={handlePick}
                disabled={!hasOptions}
            >
                What should i do?
            </button>
        </div>
    )
}

export default Action

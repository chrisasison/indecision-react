import React from 'react';
import './Action.css';

function Actions({hasOptions, handlePick}) {
    return (
        <div className="actions">
            <button
                className="button"
                onClick={handlePick}
                disabled={!hasOptions}
            >
                What should i do?
            </button>
        </div>
    )
}

export default Actions

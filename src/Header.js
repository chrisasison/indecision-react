import React from 'react';
import './Header.css'

function Header({title, subtitle}) {
    return (
        <div className='header'>
            <div className='header__title'>
                <h1>{title}</h1>
                <h5>{subtitle}</h5>
            </div>
        </div>
    )
}

export default Header

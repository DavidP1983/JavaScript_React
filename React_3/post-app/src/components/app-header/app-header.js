import React from 'react'

import './app-header.css';

const AppHeader = () => {
    return (
        <div className="app-header  d-flex flex-wrap  justify-content-between align-items-end">
            <h1>David Piruzashvili</h1>
            <h2 className='lead'> 5 записей, из них понравилось 0</h2>
        </div>
    )
}

export default AppHeader;
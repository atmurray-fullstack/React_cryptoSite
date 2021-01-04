import React from 'react';

import './style.css'
const Parallax = ({ children, height, style }) => {
    return (
        <div className='parallax text-center'
            style={{ height: height, padding: '1%' }}
        >
            {children}
        </div>
    );
}

export default Parallax;
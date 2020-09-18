import React from 'react';

import './style.css'
const Parallax = ({ children, height, style }) => {
    return (
        <div className='parallax text-center col-12'
            style={{ height: height }}
        >
            {children}
        </div>
    );
}

export default Parallax;
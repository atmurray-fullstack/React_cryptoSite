import React from 'react';
const NavigationBar = () => {




    return (

        <ul className="nav justify-content-center nav-fill">
            <li className="nav-item">
                <a className="nav-link active" href="#">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Register</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" >Cryptos</a>
            </li>
        </ul>
    );
}

export default NavigationBar;
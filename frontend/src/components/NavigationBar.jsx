import React from 'react';
import { Link } from 'react-router-dom'
const NavigationBar = () => {




    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <a className="navbar-brand" >Andrew's CryptoSite</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/' href='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' href='/login' className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Register</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Popular</a>
                    </li>                    <li className="nav-item">
                        <a className="nav-link" >List</a>
                    </li>

                </ul>

            </div>
        </nav>
    );
}

export default NavigationBar;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from '../../assets/images/login_logo.png';

function LogIn() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/intro');
    }

    return(
        <div className="LogIn">
            <div className="form">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h1>INARAWAN COFFEE</h1>
                </div>
                <div className="field">
                    <input type="password" placeholder="Enter PIN here" />
                    <button type="button" onClick={handleLogin}>Sign-in</button>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
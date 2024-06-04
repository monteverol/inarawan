import React from 'react';
import './cashier_navigator.css';
import logo from '../../assets/images/login_logo.png';
import document_icon from '../../assets/images/black_document_icon.png';
import history_icon from '../../assets/images/black_history_icon.png';
import inventory_icon from '../../assets/images/black_inventory_icon.png';
import logout_icon from '../../assets/images/logout_icon.png';
import { useNavigate } from 'react-router-dom';

function CashierNavigator () {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }

    const handleIntro = () => {
        navigate('/intro');
    }

    const handleQueue = () => {
        navigate('/queue');
    }

    return(
        <div className="CashierNavigator">
            <div className="upper">
                <img src={logo} alt="logo" onClick={handleIntro} />
                <div className="item">
                    <div className="container">
                        <img src={document_icon} alt="Order Transaction"/>
                    </div>
                </div>
                <div className="item" onClick={handleQueue}>
                    <div className="container queue">
                        <span>0</span>
                    </div>
                </div>
                <div className="item">
                    <div className="container">
                        <img src={history_icon} alt="Transaction History"/>
                    </div>
                </div>
            </div>
            <div className="lower">
                <div className="item">
                    <div className="container">
                        <img src={inventory_icon} alt="Inventory Management"/>
                    </div>
                </div>
                <div className="item" onClick={handleLogout}>
                    <div className="container logout">
                        <img src={logout_icon} alt="Log Out"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CashierNavigator;
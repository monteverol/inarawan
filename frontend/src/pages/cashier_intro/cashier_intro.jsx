import React from 'react';
import './cashier_intro.css';
import { useNavigate } from 'react-router-dom';
import document_icon from '../../assets/images/document_icon.png';
import queue_icon from '../../assets/images/queue_icon.png';
import history_icon from '../../assets/images/history_icon.png';
import inventory_icon from '../../assets/images/inventory_icon.png';

function CashierIntro() {
    const navigate = useNavigate();
    
    const handleSignOut = () => {
        navigate('/');
    }

    const handleOrderTransaction = () => {
        navigate('/order_transaction');
    }

    const handleQueue = () => {
        navigate('/queue');
    }

    return(
        <div className="Cashier_intro">
            <div className="header">
                <h1>INARAWAN COFFEE SHOP</h1>
                <span onClick={handleSignOut}>Sign out</span>
            </div>
            <hr color='#D15341'/>
            <div className="navigation">
                <div className="tile" onClick={handleOrderTransaction}>
                    <img src={document_icon} alt="Order Transaction" />
                    <h1>Order Transaction</h1>
                </div>
                <div className="tile" onClick={handleQueue}>
                    <img src={queue_icon} alt="Order Queue" />
                    <h1>Order Queue</h1>
                </div>
                <div className="tile">
                    <img src={history_icon} alt="Transaction History" />
                    <h1>Transaction History</h1>
                </div>
                <div className="tile">
                    <img src={inventory_icon} alt="Inventory Management" />
                    <h1>Inventory Management</h1>
                </div>
            </div>
        </div>
    );
}

export default CashierIntro;
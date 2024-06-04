import React, { act, useState } from 'react';
import CashierNavigator from '../../components/cashier_navigator/cashier_navigator';
import './order_transaction.css';
import ConfirmOrder from '../../components/confirm_order/confirm_order';

function OrderTransaction() {
    const [activeTab, setActiveTab] = useState('Coffee');
    const [expandedSection, setExpandedSection] = useState();
    const [processingOrder, setProcessingOrder] = useState(false);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    }

    return (
        <div className="OrderTransaction">
            {processingOrder && <ConfirmOrder />}
            <CashierNavigator />
            <div className="content">
                <div className="products">
                    <div className="tabs">
                        <button className={`tab ${activeTab === 'Coffee' ? 'active' : ''}`} onClick={() => setActiveTab('Coffee')}>Coffee</button>
                        <button className={`tab ${activeTab === 'Pasta' ? 'active' : ''}`} onClick={() => setActiveTab('Pasta')}>Pasta</button>
                        <button className={`tab ${activeTab === 'Pastries' ? 'active' : ''}`} onClick={() => setActiveTab('Pastries')}>Pastries</button>
                    </div>
                    <div className="tab-content">
                        {activeTab === 'Coffee' && (
                            <div className="coffee">
                                <div className={`section ${expandedSection === 'Signature' ? 'active' : ''}`} onClick={() => toggleSection('Signature')}>
                                    <h3>Signature Handcrafted Coffee <span>{expandedSection === 'Signature' ? '▲' : '▼'}</span></h3>
                                    {expandedSection === 'Signature' && (
                                        <div className='list'>
                                            <div className="product"></div>
                                        </div>
                                    )}
                                </div>
                                <div className={`section ${expandedSection === 'Coffee-Free' ? 'active' : ''}`} onClick={() => toggleSection('Coffee-Free')}>
                                    <h3>Coffee-Free <span>{expandedSection === 'Coffee-Free' ? '▲' : '▼'}</span></h3>
                                    {expandedSection === 'Coffee-Free' && (
                                        <div className='list'>
                                            <div className="product"></div>
                                        </div>
                                    )}
                                </div>
                                <div className={`section ${expandedSection === 'Brewed Coffee' ? 'active' : ''}`} onClick={() => toggleSection('Brewed Coffee')}>
                                    <h3>Brewed Coffee <span>{expandedSection === 'Brewed Coffee' ? '▲' : '▼'}</span></h3>
                                    {expandedSection === 'Brewed Coffee' && (
                                        <div className='list'>
                                            <div className="product"></div>
                                        </div>
                                    )}
                                </div>
                                <div className={`section ${expandedSection === 'Ice Blended' ? 'active' : ''}`} onClick={() => toggleSection('Ice Blended')}>
                                    <h3>Ice Blended <span>{expandedSection === 'Ice Blended' ? '▲' : '▼'}</span></h3>
                                    {expandedSection === 'Ice Blended' && (
                                        <div className='list'>
                                            <div className="product"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        {activeTab === 'Pasta' && (
                            <h1>YOU</h1>
                        )}
                        {activeTab === 'Pastries' && (
                            <h1>SHAND</h1>
                        )}
                    </div>
                </div>
                <div className='orders'>
                    <div className="list">
                        <div className="header">
                            <h1>ORDER #1</h1>
                        </div>
                        <div className="body"></div>
                        <div className="footer">
                            <h1>Total:</h1>
                            <h1>P 0.00</h1>
                        </div>
                    </div>
                    <div className="button" onClick={() => setProcessingOrder(true)}>
                        <h1>CONFIRM ORDER</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderTransaction;
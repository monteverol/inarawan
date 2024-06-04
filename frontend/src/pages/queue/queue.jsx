import React from 'react';
import CashierNavigator from '../../components/cashier_navigator/cashier_navigator';
import './queue.css';

function Queue() {
    return(
        <div className='Queue'>
            <CashierNavigator />
            <div className="content">
                <h1>ORDER QUEUEING MANAGEMENT</h1>
                <div className="list">
                    <div className="queue-order">
                        <h1>ON: #223</h1>
                        <hr />
                        <h3>1x Matcha Latte [Small]</h3>
                        <h5>Add on = Soy Milk</h5>
                        <hr />
                        <h1>Time elapsed: 1m 36s</h1>
                    </div>
                    <div className="queue-order">
                        <h1>ON: #223</h1>
                        <hr />
                        <h3>1x Matcha Latte [Small]</h3>
                        <h5>Add on = Soy Milk</h5>
                        <h3>1x Matcha Latte [Small]</h3>
                        <h5>Add on = Soy Milk</h5>
                        <h3>1x Matcha Latte [Small]</h3>
                        <h5>Add on = Soy Milk</h5>
                        <h3>1x Matcha Latte [Small]</h3>
                        <h5>Add on = Soy Milk</h5>
                        <h3>1x Matcha Latte [Small]</h3>
                        <h5>Add on = Soy Milk</h5>
                        <h3>1x Matcha Latte [Small]</h3>
                        <h5>Add on = Soy Milk</h5>
                        <hr />
                        <h1>Time elapsed: 1m 36s</h1>
                    </div>
                    <div className="queue-order">
                        <h1>ON: #223</h1>
                        <hr />
                        <h3>1x Matcha Latte [Small]</h3>
                        <h5>Add on = Soy Milk</h5>
                        <h3>1x Matcha Latte [Small]</h3>
                        <h5>Add on = Soy Milk</h5>
                        <hr />
                        <h1>Time elapsed: 1m 36s</h1>
                    </div>
                    <div className="queue-order">
                        <h1>ON: #223</h1>
                        <hr />
                        <h3>1x Matcha Latte [Small]</h3>
                        <h5>Add on = Soy Milk</h5>
                        <hr />
                        <h1>Time elapsed: 1m 36s</h1>
                    </div>
                    <div className="queue-order">
                        <h1>ON: #223</h1>
                        <hr />
                        <h3>1x Matcha Latte [Small]</h3>
                        <h5>Add on = Soy Milk</h5>
                        <h3>1x Matcha Latte [Small]</h3>
                        <h5>Add on = Soy Milk</h5>
                        <hr />
                        <h1>Time elapsed: 1m 36s</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Queue;
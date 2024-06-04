import './App.css';
import { Routes, Route } from 'react-router-dom';
import LogIn from './pages/login/login';
import CashierIntro from './pages/cashier_intro/cashier_intro';
import OrderTransaction from './pages/order_transaction/order_transaction';
import Queue from './pages/queue/queue';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/intro" element={<CashierIntro />} />
        <Route path="/order_transaction" element={<OrderTransaction />} />
        <Route path="/queue" element={<Queue />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StockTrends from './components/StockTrends';
import BudgetTracker from './components/BudgetTracker';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stocks" element={<StockTrends />} />
          <Route path="/budget" element={<BudgetTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
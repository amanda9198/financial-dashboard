import React from 'react';
import FinancialSummary from './FinancialSummary';
import StockTrends from './StockTrends';
import BudgetTracker from './BudgetTracker';

const Dashboard = () => {
  return (
    <div>
      <h1>Financial Dashboard</h1>
      <FinancialSummary />
      <StockTrends />
      <BudgetTracker />
    </div>
  );
};

export default Dashboard;
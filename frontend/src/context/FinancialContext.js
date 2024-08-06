import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FinancialContext = createContext();

export const FinancialProvider = ({ children }) => {
  const [financialSummary, setFinancialSummary] = useState(null);
  const [stockTrends, setStockTrends] = useState(null);
  const [budget, setBudget] = useState(null);

  useEffect(() => {
    fetchFinancialData();
  }, []);

  const fetchFinancialData = async () => {
    try {
      const summaryRes = await axios.get('/api/financial-summary');
      setFinancialSummary(summaryRes.data);

      const stockRes = await axios.get('/api/stock-trends');
      setStockTrends(stockRes.data);

      const budgetRes = await axios.get('/api/budget');
      setBudget(budgetRes.data);
    } catch (error) {
      console.error('Error fetching financial data:', error);
    }
  };

  return (
    <FinancialContext.Provider value={{ financialSummary, stockTrends, budget, fetchFinancialData }}>
      {children}
    </FinancialContext.Provider>
  );
};
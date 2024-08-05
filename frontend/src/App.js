import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StockTrends from './components/StockTrends';
import BudgetTracker from './components/BudgetTracker';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/stocks" component={StockTrends} />
          <Route path="/budget" component={BudgetTracker} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
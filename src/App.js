import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransanctionList } from './components/TransanctionList';
import { AddTransanction } from './components/AddTransanction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransanctionList />
        <AddTransanction />
      </div>
    </GlobalProvider>
  );
}

export default App;


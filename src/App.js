import React from "react";
import {TransactionProvider} from "./components/context.js"
import './App.css';
import{Header} from "./components/Header.js"
import {Balance} from  "./components/Balance.js"
import {AccountSummary} from "./components/AccountSumary.js"
import {TransactionHistory} from "./components/TransactionHistory.js"
import {NewTransaction} from "./components/NewTransaction"

function App() {
  return (
    <TransactionProvider>
    <div className = "TrackerApp">
      <Header />
      <div className="balance">
      <Balance />
      </div>
      <div className="accountsummary" >
        <AccountSummary />
      </div>
      <div className="transactionhistory">
      <TransactionHistory />
      </div>
      <div className="newtransaction">
    <NewTransaction />
      </div>
    </div>
    </TransactionProvider>
  );
}

export default App;

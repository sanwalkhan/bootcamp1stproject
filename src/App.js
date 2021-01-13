import React from "react";
import './App.css';
import{Header} from "./components/Header.js"
import {Balance} from  "./components/Balance.js"
import {AccountSumary} from "./components/AccountSumary.js"
import {TransactionHistory} from "./components/TransactionHistory.js"
import {NewTransaction} from "./components/NewTransaction"



function App() {
  return (
    
    <div className = "TrackerApp">
       <Header />
       
      <div className="balance">
      <Balance />
      </div>

      <div className="accountsummary" >
        <AccountSumary />
      </div>

      <div className="transactionhistory">
      <TransactionHistory />
      </div>

      <div className="newtransaction">
    <NewTransaction />
      </div>
    </div>

  );
}

export default App;

import React from 'react'

export const TransactionHistory = () => {
    let Transaction = [
        {amount: "$0.00" , desc:"Cash"},
        {amount: "$0.00" , desc:"Loan"},
        {amount: "$0.00" , desc:" Bill"}
    ]
    return (
        <div>
            <h3>Transaction History</h3>
            <hr /> 
            <ul className="history">
                {Transaction.map((transObj , ind)=> {
                    return(
                        <div>
                             <li>
                         <span>{transObj.desc} </span> 
                         
                             <span>{transObj.amount}</span>
                             
                         </li>

                        </div>
                   
                       
                    )
                })}
            </ul>
           
        </div>
    )
}

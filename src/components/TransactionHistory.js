import React, {useContext} from 'react'
import { TransactionContext } from './context'


export const TransactionHistory = () => {
    let {Transaction} = useContext(TransactionContext)
    return (
        <div>
            <h3>Transaction History</h3>
            <hr /> 
            <ul className="history">
                {Transaction.map((transObj , ind)=> {
                    return(
                        <div>
                             <li key={ind}>
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

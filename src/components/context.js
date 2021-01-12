import React, { createContext, useReducer } from "react";
import {TransactionReducer} from "./reducer"; 


const  FirstTransaction = [
    {amount: "$0.00" , desc:"Cash"},
    {amount: "$0.00" , desc:"Loan"},
    {amount: "$0.00" , desc:" Bill"}
]
export const TransactionContext = createContext(FirstTransaction)



export const TransactionProvider = ({children}) => {
    const [state, dispatch] = useReducer ( TransactionReducer,  FirstTransaction)

    function addTransaction(transObj){
dispatch({
    type : "ADD",
    payload: {
        amount: transObj.amount,
        desc : transObj.desc
    },
})
    }
    return(
        <TransactionContext.Provider value={{
            Transaction:state,
            addTransaction:addTransaction

        }}>
                {children}
        </TransactionContext.Provider>
    )
}

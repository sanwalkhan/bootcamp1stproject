import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="histlist">
                <li>Cash <span>-$400</span> </li>
                {/* <li>Loan <span>-$100</span> </li>
                <li>Bills <span>-$40</span> </li> */}
            </ul>
        </div>
    )
}

import React, { useState } from 'react'

export const NewTransaction = () => {
const [text , settext] = useState("");
const [amount, setamount] = useState(0);

    return (
        <div>
            <h3>
                Add New Transaction

                <form >
                 <div>
                 <label htmlFor="text"> Discription </label><br />
                    <input type="text" value={text} onChange={(e) => settext(e.target.value)} placeholder="Details..." required/>
                 </div>

                 <div>
                     <label htmlFor="amount">Amount
                     <br />
                     {/* (negative -expense, positive- income) */}
                     </label>
                     <input type="number" value={amount} onChange={(e) => setamount(e.target.value)} placeholder="Value" required />

                 </div>
                 <button className="btn" type="submit">Add Transaction</button> 

                </form>
            </h3>
        </div>
    )
}

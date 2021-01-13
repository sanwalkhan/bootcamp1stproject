import React, { useState } from 'react'

export const NewTransaction = () => {
const [text , settext] = useState("");
const [amount, setamount] = useState(0);

    return (
        <div>
            <h3>
                Add New Transaction

                <form>
                 <div>
                 <label htmlFor="text">Discription</label><br />
                    <input type="text" placeholder="Details..." required/>
                 </div>

                 <div>
                     <label htmlFor="amount">Amount
                     <br />
                     (negative -expense, positive- income)
                     </label>
                     <br />
                     <input type="number" placeholder="Value" required />

                 </div>
                 <input type="submit" value="Add Transaction"  /> 

                </form>
            </h3>
        </div>
    )
}

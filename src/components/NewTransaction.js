import React from 'react'

export const NewTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <hr />
            <form className="inputform">
                <label>
                   <b>Enter Discription</b>  <br /> <input type="text" placeholder="Details of Discription" required></input>
                </label>
                <br />
                <label>
                   <b> Enter Amount</b> <br /> <input type="number" placeholder="Enter Transaction Amount" required></input>
                </label>

                <br />

                <input type="submit" value="Add Transaction"></input>
            </form>
        </div>
    )
}

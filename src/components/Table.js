import React from 'react'
import TableRow from './TableRow'

export default function Table ({expenses, setExpenses}) {
    
    const handleDelete = (expenseId) => {
    
        setExpenses(expenses.filter((expense) => expenseId !== expense.id));
      };

    return(
        <table className="table table-bordered table-hover">
        <thead className="thead">
            <tr>
                <th>Date</th>
                <th>Location</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
          <TableRow expenses={expenses} handleDelete={handleDelete} />
        </tbody>

      </table> 
    )
}

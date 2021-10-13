import React from 'react'

export default function TableRow({expenses, handleDelete}) {
    return (
        expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.location}</td>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td><button type="button" onClick={() => handleDelete(expense.id)}>X</button></td>
            </tr>
          ))
    )
};

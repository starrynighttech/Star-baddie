import { useEffect, useState } from "react"

export default function Payments() {
  const [payments, setPayments] = useState([])

  useEffect(() => {
    // Replace with API
    setPayments([
      { id: 1, user: "user1@mail.com", amount: 10, method: "CASH", status: "PENDING" },
      { id: 2, user: "user2@mail.com", amount: 5, method: "PAYNOW", status: "CONFIRMED" }
    ])
  }, [])

  const approveCash = (id) => {
    alert(`Cash payment ${id} approved`)
    // call backend API here
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Payments</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>User</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {payments.map(p => (
            <tr key={p.id}>
              <td>{p.user}</td>
              <td>${p.amount}</td>
              <td>{p.method}</td>
              <td>{p.status}</td>
              <td>
                {p.method === "CASH" && p.status === "PENDING" && (
                  <button onClick={() => approveCash(p.id)}>
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

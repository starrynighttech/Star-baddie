import { useEffect, useState } from "react"

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Replace with real API
    setUsers([
      { id: 1, email: "user1@mail.com", balance: 10 },
      { id: 2, email: "user2@mail.com", balance: 25 }
    ])
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h2>Users</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Email</th>
            <th>Balance</th>
          </tr>
        </thead>

        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.email}</td>
              <td>${u.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

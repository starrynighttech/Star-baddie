import { useState } from "react"

export default function Tracking() {
  const [code, setCode] = useState("")
  const [status, setStatus] = useState("")

  const update = () => {
    alert(`Tracking ${code} updated to ${status}`)
    // call backend API here
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Tracking Management</h2>

      <input
        placeholder="Tracking Code"
        value={code}
        onChange={e => setCode(e.target.value)}
      />

      <select onChange={e => setStatus(e.target.value)}>
        <option>Shipped</option>
        <option>In Transit</option>
        <option>Delivered</option>
      </select>

      <button onClick={update}>Update</button>
    </div>
  )
}

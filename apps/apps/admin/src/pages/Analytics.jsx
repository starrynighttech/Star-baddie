import { useEffect, useState } from "react"

export default function Analytics() {
  const [stats, setStats] = useState({
    users: 0,
    revenue: 0,
    matches: 0
  })

  useEffect(() => {
    // Replace with API
    setStats({
      users: 1240,
      revenue: 2430,
      matches: 8320
    })
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h2>Analytics</h2>

      <div style={{ display: "flex", gap: 20 }}>
        <div className="card">Users: {stats.users}</div>
        <div className="card">Revenue: ${stats.revenue}</div>
        <div className="card">Matches: {stats.matches}</div>
      </div>
    </div>
  )
}

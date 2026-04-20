import { useEffect, useState } from "react"

export default function Dashboard() {
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    // Replace with real API
    setBalance(12.5)
  }, [])

  return (
    <div className="p-8 text-white bg-black min-h-screen">

      <h1 className="text-3xl mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-sm opacity-60">Balance</h2>
          <p className="text-3xl font-bold">${balance}</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-sm opacity-60">Matches</h2>
          <p className="text-3xl font-bold">42</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-sm opacity-60">Referrals</h2>
          <p className="text-3xl font-bold">8</p>
        </div>

      </div>

    </div>
  )
}

import { useState } from "react"

export default function Tracking() {
  const [status, setStatus] = useState("In Transit")

  return (
    <div className="p-8 bg-black text-white min-h-screen">

      <h1 className="text-3xl mb-6">Tracking</h1>

      <div className="bg-gray-900 p-6 rounded-xl">

        <p className="mb-2">Tracking Code:</p>
        <p className="font-bold mb-4">TRK-123456</p>

        <div className="space-y-3">
          <div>📦 Shipped</div>
          <div>🚚 In Transit</div>
          <div>🏠 Delivered</div>
        </div>

        <p className="mt-4 text-lg">Current Status: {status}</p>

      </div>

    </div>
  )
}

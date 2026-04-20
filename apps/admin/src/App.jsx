import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Users from "./pages/Users"
import Payments from "./pages/Payments"
import Tracking from "./pages/Tracking"
import Analytics from "./pages/Analytics"

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>

        {/* Sidebar */}
        <nav style={{ width: 200, padding: 20, background: "#111", color:"#fff" }}>
          <p><Link to="/">Analytics</Link></p>
          <p><Link to="/users">Users</Link></p>
          <p><Link to="/payments">Payments</Link></p>
          <p><Link to="/tracking">Tracking</Link></p>
        </nav>

        {/* Pages */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/users" element={<Users />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/tracking" element={<Tracking />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  )
}

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Ads from "./pages/Ads"
import Tracking from "./pages/Tracking"
import Referral from "./pages/Referral"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/referral" element={<Referral />} />
      </Routes>
    </BrowserRouter>
  )
}

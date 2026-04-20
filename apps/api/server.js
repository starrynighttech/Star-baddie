require("dotenv").config()

const express = require("express")
const http = require("http")
const { Server } = require("socket.io")

const { connectDB } = require("../../packages/db")
const auth = require("../../packages/auth/middleware")
const { check } = require("../../packages/security/fraudGuard")
const { record } = require("../../packages/payments/ledger")

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.json())

connectDB()

app.get("/health", (_, res) => res.json({ ok: true }))

app.post("/shake", auth, (req, res) => {
  if (!check(req.user.id)) return res.send("Too fast")

  record({ type: "shake", user: req.user.id })

  res.json({ matched: true })
})

server.listen(process.env.PORT)

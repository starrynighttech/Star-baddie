function init(io) {
  io.on("connection", socket => {
    socket.on("shake", data => {
      io.emit("match", data)
    })
  })
}

module.exports = { init }

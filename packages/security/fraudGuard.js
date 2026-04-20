const lastShake = new Map()

function check(userId) {
  const now = Date.now()
  const last = lastShake.get(userId) || 0

  if (now - last < 2000) return false

  lastShake.set(userId, now)
  return true
}

module.exports = { check }

let stats = {
  users: 0,
  matches: 0
}

function inc(key) {
  stats[key]++
}

function get() {
  return stats
}

module.exports = { inc, get }

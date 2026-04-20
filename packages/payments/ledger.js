const ledger = []

function record(tx) {
  ledger.push(tx)
}

function all() {
  return ledger
}

module.exports = { record, all }

function handlePayNowWebhook(data) {
  if (data.status === "SUCCESS") {
    return true
  }
  return false
}

module.exports = { handlePayNowWebhook }

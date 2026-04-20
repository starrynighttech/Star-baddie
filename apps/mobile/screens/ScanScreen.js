import { View, Text } from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner"
import { useState, useEffect } from "react"

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    BarCodeScanner.requestPermissionsAsync().then(({ status }) => {
      setHasPermission(status === "granted")
    })
  }, [])

  const handleScan = ({ data }) => {
    setScanned(true)
    alert(`Scanned: ${data}`)
  }

  if (hasPermission === null) return <Text>Requesting camera...</Text>
  if (hasPermission === false) return <Text>No camera access</Text>

  return (
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleScan}
      style={{ flex:1 }}
    />
  )
}

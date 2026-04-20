import { View, Text, Button } from "react-native"
import * as Clipboard from "expo-clipboard"

export default function ReferralScreen() {
  const code = "ABC123"

  const copy = () => {
    Clipboard.setStringAsync(code)
    alert("Copied!")
  }

  return (
    <View style={{ padding:20 }}>
      <Text style={{ fontSize:24 }}>Referral Code</Text>

      <Text style={{ fontSize:28, fontWeight:"bold", marginVertical:10 }}>
        {code}
      </Text>

      <Button title="Copy Code" onPress={copy} />
    </View>
  )
}

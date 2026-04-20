import { View, Text } from "react-native"

export default function TrackingScreen() {
  return (
    <View style={{ padding:20 }}>
      <Text style={{ fontSize:24 }}>Tracking</Text>

      <Text style={{ marginTop:10 }}>Tracking Code:</Text>
      <Text style={{ fontWeight:"bold" }}>TRK-123456</Text>

      <Text style={{ marginTop:20 }}>Status:</Text>
      <Text>In Transit 🚚</Text>
    </View>
  )
}

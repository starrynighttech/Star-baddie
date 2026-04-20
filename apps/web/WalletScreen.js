import { View, Text } from "react-native"

export default function Wallet() {
  return (
    <View style={{ padding:20 }}>
      <Text style={{ fontSize:28 }}>Balance</Text>
      <Text style={{ fontSize:40, fontWeight:"bold" }}>$12.50</Text>
    </View>
  )
}

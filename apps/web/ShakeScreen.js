import { View, Text } from "react-native"

export default function ShakeScreen() {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text style={{ fontSize:22 }}>Shake your phone</Text>
      <Text style={{ opacity:0.6 }}>Connect with nearby users</Text>
    </View>
  )
}

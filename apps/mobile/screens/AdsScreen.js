import { View, Text, Button, Alert } from "react-native"

export default function AdsScreen() {
  return (
    <View style={{ padding:20 }}>
      <Text style={{ fontSize:24 }}>Engage & Earn</Text>

      <Button
        title="Watch Ad (+$0.50)"
        onPress={() => Alert.alert("Reward", "You earned $0.50")}
      />
    </View>
  )
}

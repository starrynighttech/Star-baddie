import { View, Text, TouchableOpacity } from "react-native"

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"#000" }}>
      <Text style={{ color:"#fff", fontSize:28, fontWeight:"bold" }}>
        EarnTogether
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Shake")}
        style={{ marginTop:20, backgroundColor:"#fff", padding:12, borderRadius:10 }}
      >
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

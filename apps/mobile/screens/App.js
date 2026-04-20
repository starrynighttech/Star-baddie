import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "./screens/HomeScreen"
import Shake from "./screens/ShakeScreen"
import Wallet from "./screens/WalletScreen"
import Ads from "./screens/AdsScreen"
import Scan from "./screens/ScanScreen"
import Tracking from "./screens/TrackingScreen"
import Referral from "./screens/ReferralScreen"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Shake" component={Shake} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Ads" component={Ads} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Tracking" component={Tracking} />
        <Stack.Screen name="Referral" component={Referral} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

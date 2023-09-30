import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyRoomPage from "../Screen/Renter/MyRoomPage";

Stack = createNativeStackNavigator;
Tab = createBottomTabNavigator;

const AppNavigator = () => {
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="S1" component= {MyRoomPage}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}

export default AppNavigator
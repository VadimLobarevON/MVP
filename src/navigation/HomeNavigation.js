import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen'
import TransactionsScreen from '../screens/TransactionsScreen';
import QAScreen from '../screens/QAScreen';
import GoldScreen from '../screens/GoldScreen';
import ProfileScreen from '../screens/ProfileScreen';
const HomeNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name="Transactions" component={TransactionsScreen} />
            <Tab.Screen name="QA" component={QAScreen} />
            <Tab.Screen name="Gold" component={GoldScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default HomeNavigation

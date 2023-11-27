// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Firstpage from './Firstpage';
import Navigation from './Navigation';
import SplashScreen from './SplashScreen';
import TopayScreen from './TopayScreen';
import ProfileScreen from './ProfileScreen';
import WaitingSendScreen from './WaitingSendScreen';
import WaitingReceiveScreen from './WaitingReceiveScreen';
import CreditCardScreen from './CreditCardScreen';
import SettingScreen from './SettingScreen';
import ThemeScreen from './ThemeScreen';
import ShippingAddressForm from './ShippingAddressForm';
import Login from './Login';
import EditProfile from './EditProfile';
import SuccessfulPaymentScreen from './SuccessfulPaymentScreen';
import HomepageScreen from './HomepageScreen';
import ReminderSettingScreen from './ReminderSettingScreen';
import TimerScreen from './TimerScreen';
import RepeatScreen from './RepeatScreen';
import Secondpage from './Secondpage';
import PaypalScreen from './PaypalScreen';
import ShopDetailsScreen from './ShopDetailsScreen';
import DrinkScreen from './DrinkScreen';
import ThemeDetails from './ThemeDetails';
import RingtonePicker from './RingtonePicker';
import Rate from './Rate';
import ContactUs from './ContactUs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        <Stack.Screen name="Firstpage" component={Firstpage} />
        <Stack.Screen name="HomepageScreen" component={HomepageScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="TopayScreen" component={TopayScreen} />
        <Stack.Screen name="WaitingSendScreen" component={WaitingSendScreen} />
        <Stack.Screen name="WaitingReceiveScreen" component={WaitingReceiveScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
        <Stack.Screen name="ShippingAddressForm" component={ShippingAddressForm} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="CreditCardScreen" component={CreditCardScreen} />
        <Stack.Screen name="SuccessfulPaymentScreen" component={SuccessfulPaymentScreen} />
        <Stack.Screen name="ReminderSettingScreen" component={ReminderSettingScreen} />
        <Stack.Screen name="TimerScreen" component={TimerScreen} />
        <Stack.Screen name="RepeatScreen" component={RepeatScreen} />
        <Stack.Screen name="Secondpage" component={Secondpage} />
        <Stack.Screen name="PaypalScreen" component={PaypalScreen} />
        <Stack.Screen name="ShopDetailsScreen" component={ShopDetailsScreen} />
        <Stack.Screen name="DrinkScreen" component={DrinkScreen} />
        <Stack.Screen name="RingtonePicker" component={RingtonePicker} />
        <Stack.Screen name="ThemeDetails" component={ThemeDetails} />
        <Stack.Screen name="Rate" component={Rate} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

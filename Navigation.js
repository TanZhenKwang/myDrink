// Navigation.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';

import HomepageScreen from './HomepageScreen';
import StatisticsScreen from './StatisticsScreen';
import ProfileScreen from './ProfileScreen';
import DrinkScreen from './DrinkScreen';
import ShopScreen from './ShopScreen';
import ReminderSettingScreen from './ReminderSettingScreen'; // Import the ReminderSettingScreen

const Tab = createBottomTabNavigator();

const getTabBarImage = (routeName, focused) => {
  // Map route names to corresponding image sources
  const imageMap = {
    Home: focused ? require('./assets/Homepage.png') : require('./assets/Homepage.png'),
    Drink: focused ? require('./assets/Drink.png') : require('./assets/Drink.png'),
    Statistics: focused ? require('./assets/Statistics.png') : require('./assets/Statistics.png'),
    Shop: focused ? require('./assets/Shop.png') : require('./assets/Shop.png'),
    Profile: focused ? require('./assets/Profile.png') : require('./assets/Profile.png'),
  };

  return imageMap[routeName];
};

const Navigation = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const imageSource = getTabBarImage(route.name, focused);

          return <Image source={imageSource} style={{ width: size, height: size, resizeMode: 'contain' }} />;
        },
      })}
      tabBarOptions={{
        style: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          backgroundColor: '#fff',
          bottom: 0,
        },
        tabStyle: {
          backgroundColor: '#fff',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          overflow: 'hidden',
        },
        showLabel: false,
        activeTintColor: '#007BFF',
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#ddd',
      }}
    >
      <Tab.Screen name="Home" component={HomepageScreen} />
      <Tab.Screen name="Drink" component={DrinkScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Navigation;

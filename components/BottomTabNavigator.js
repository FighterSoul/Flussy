import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import homeIcon from '../assets/home.png';
import depositsIcon from '../assets/deposit.png';
import expensesIcon from '../assets/expenses.png';
import investIcon from '../assets/invest.png';
import profileIcon from '../assets/profile.png';

import Deposits from '../screens/Deposits';
import Expenses from '../screens/Expenses';
import Profile from '../screens/Profile';
import Invest from '../screens/Invest';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 90 },
      }}
      tabBarOptions={{
        activeTintColor: '#000',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, { backgroundColor: focused ? '#ddd' : '#fff' }]}>
              <Image source={homeIcon} style={styles.icon} />
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Deposits" 
        component={Deposits} 
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, { backgroundColor: focused ? '#ddd' : '#fff' }]}>
              <Image source={depositsIcon} style={styles.icon} />
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Expenses" 
        component={Expenses} 
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, { backgroundColor: focused ? '#ddd' : '#fff' }]}>
              <Image source={expensesIcon} style={styles.icon} />
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Invest" 
        component={Invest} 
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, { backgroundColor: focused ? '#ddd' : '#fff' }]}>
              <Image source={investIcon} style={styles.icon} />
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, { backgroundColor: focused ? '#ddd' : '#fff' }]}>
              <Image source={profileIcon} style={styles.icon} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default BottomTabNavigator;

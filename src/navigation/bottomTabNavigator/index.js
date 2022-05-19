import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {DashboardScreen, SettingsScreen} from '../../screens'

import {DollarIcon, ListIcon} from '../../assets'

const Tab = createBottomTabNavigator()

const screenOptions = {
  headerShown: false,
}

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Dashboard" screenOptions={screenOptions}>
      <Tab.Screen
        name={'Dashboard'}
        component={DashboardScreen}
        options={{
          tabBarIcon: () => <DollarIcon />,
        }}
      />
      <Tab.Screen
        name={'Settings'}
        component={SettingsScreen}
        options={{
          tabBarIcon: () => <ListIcon />,
        }}
      />
    </Tab.Navigator>
  )
}

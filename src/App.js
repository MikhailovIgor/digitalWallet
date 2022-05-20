import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {BottomTabNavigator} from './navigation'
export const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}

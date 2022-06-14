import React from 'react'
import {Platform} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {DashboardScreen, SettingsScreen} from '../../screens'

import {DollarIcon, ListIcon} from '../../assets'
import {COLORS} from '../../constants'

const Tab = createBottomTabNavigator()

// const TabBar = props => {
//   const insets = useSafeAreaInsets()
//   const isIosFillLine = Platform.OS === 'ios' && insets.bottom > 30

//   return (
//     <View style={[styles.navigatorContainer, {bottom: isIosFillLine ? 30 : 0}]}>
//       <BottomTabBar {...props} />
//     </View>
//   )
// }

const getTabBarIconColor = focused =>
  focused ? COLORS.forestGreen : COLORS.paleGreen

export const BottomTabNavigator = () => {
  // const insets = useSafeAreaInsets()
  // const isIosFillLine = Platform.OS === 'ios' && insets.bottom > 30

  const screenOptions = {
    headerShown: false,
    // tabBarLabelStyle: {marginBottom: isIosFillLine ? 20 : 8},
    tabBarStyle: {backgroundColor: COLORS.primaryDark},
  }

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

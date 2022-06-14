import React from 'react'
import {Text, View} from 'react-native'
import {CustomCardsCarousel, ScreenWrapper} from '../../components'

export const DashboardScreen = () => {
  return (
    <ScreenWrapper>
      <CustomCardsCarousel />
      <View
        style={{height: 500, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Card's Information</Text>
      </View>
    </ScreenWrapper>
  )
}

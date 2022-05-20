import React from 'react'
import {View, SafeAreaView} from 'react-native'
import {styles} from './styles'

export const ScreenWrapper = ({children, wrapperStyle}) => (
  <SafeAreaView style={styles.container}>
    <View style={[styles.childrenWrapper, wrapperStyle]}>{children}</View>
  </SafeAreaView>
)

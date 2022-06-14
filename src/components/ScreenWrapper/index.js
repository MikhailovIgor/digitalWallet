import React from 'react'
import {View, SafeAreaView} from 'react-native'
import {styles} from './styles'

export const ScreenWrapper = ({children}) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.childrenWrapper}>{children}</View>
  </SafeAreaView>
)

import React from 'react'
import {View, Text} from 'react-native'
import {styles} from './styles'

export const CarouselCardItem = ({item}) => (
  <View style={styles.container}>
    <View key={item.id} style={styles.cardContainer}>
      <Text style={{textAlign: 'center'}}>{item.title}</Text>
    </View>
  </View>
)

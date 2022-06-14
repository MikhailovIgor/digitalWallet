import React, {useCallback, useRef, useState} from 'react'
import {TouchableOpacity, View, FlatList} from 'react-native'
import {ArrowRight, ArrowLeft} from '../../assets'
import {CarouselCardItem} from '../CarouselCardItem'
import {COLORS} from '../../constants'
import {styles} from './styles'

const mockData = [
  {
    id: 0,
    title: 'platinum card',
    icon: '',
    info: '1111333322224444',
  },
  {
    id: 1,
    title: 'gold card',
    icon: '',
    info: '2222333322221111',
  },
  {
    id: 2,
    title: 'debit card',
    icon: '',
    info: '3333444422221111',
  },
  {
    id: 3,
    title: 'credit card',
    icon: '',
    info: '4444333322221111',
  },
]

export const CustomCardsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)

  const handleLeftArrowPressed = () => {
    if (currentIndex - 1 >= 0) {
      ref.current?.scrollToIndex({index: currentIndex - 1})
    }
  }

  const handleRightArrowPressed = () => {
    if (currentIndex + 1 < mockData.length) {
      ref.current?.scrollToIndex({index: currentIndex + 1})
    }
  }

  const onScroll = useCallback(event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width
    const index = event.nativeEvent.contentOffset.x / slideSize
    const roundIndex = Math.round(index)
    setCurrentIndex(roundIndex)
  }, [])

  let isLoading = false
  return (
    <View style={styles.container}>
      {currentIndex > 0 ? (
        <TouchableOpacity
          onPress={handleLeftArrowPressed}
          style={styles.arrowContainer}>
          <ArrowLeft fill={'#ccc'} width={24} height={24} />
        </TouchableOpacity>
      ) : (
        <View style={styles.arrowContainer} />
      )}
      {isLoading
        ? null
        : mockData.length > 0 && (
            <FlatList
              horizontal
              pagingEnabled
              scrollEventThrottle={32}
              data={mockData}
              ref={ref}
              showsHorizontalScrollIndicator={false}
              onScroll={onScroll}
              keyExtractor={item => item.id}
              renderItem={({item}) => <CarouselCardItem item={item} />}
            />
          )}
      {currentIndex < mockData.length - 1 ? (
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={handleRightArrowPressed}>
          <ArrowRight fill={COLORS.paleGreen} width={24} height={24} />
        </TouchableOpacity>
      ) : (
        <View style={styles.arrowContainer} />
      )}
    </View>
  )
}

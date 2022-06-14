import {Dimensions, StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
  },
  cardContainer: {
    width: Dimensions.get('window').width - 92,
    height: 160,
    padding: 24,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
  },
})

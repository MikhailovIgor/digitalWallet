import {StyleSheet} from 'react-native'
import {COLORS} from '../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  childrenWrapper: {
    flex: 1,
    marginHorizontal: 5,
    width: '100%',
  },
})

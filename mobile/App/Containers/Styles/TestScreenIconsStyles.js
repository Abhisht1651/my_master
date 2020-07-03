import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  centered: {
    alignItems: 'center'
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  box0: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 10
  },
  box1: {
    flexDirection: 'row'
  },
  box: {
    padding: 10
  },
  box2: {
    padding: 15
  }
})

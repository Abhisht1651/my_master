import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  displayContainer: {
    marginVertical: 4,
    width: wp('86.67%')
  },
  displayItem: {
    marginTop: 20
  },
  divider: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E6ECED',
    width: wp('100%')
  }
})

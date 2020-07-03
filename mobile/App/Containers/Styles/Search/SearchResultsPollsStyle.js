import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayContainer: {
    marginVertical: 4,
    width: wp('86.67%')
  },
  displayItem: {
    marginVertical: 20
  }
})

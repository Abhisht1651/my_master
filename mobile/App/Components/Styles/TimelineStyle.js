import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

export default StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paginationDot: {
    width: wp('1.3%'),
    height: wp('1.3%'),
    borderWidth: wp('0.267%'),
    borderStyle: 'solid',
    borderColor: '#47C3F4',
    borderRadius: wp('0.8%'),
    opacity: 1
  },
  paginationDotActive: {
    width: wp('1.3%'),
    height: wp('1.3%'),
    backgroundColor: '#47C3F4',
    borderWidth: wp('0.267%'),
    borderStyle: 'solid',
    borderColor: '#47C3F4',
    borderRadius: wp('0.8%'),
    opacity: 1
  },
  paginationLine: {
    width: wp('13.3%'),
    height: wp('0.267%'),
    backgroundColor: '#47C3F4',
    opacity: 1
  },
  type1Container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  smallDotsContainer: {
    flexDirection: 'row'
  },
  smallDots: {
    height: wp('0.53%'),
    width: wp('0.267%'),
    marginLeft: wp('0.8%'),
    backgroundColor: '#47C3F4',
    opacity: 1
  },
  type2Container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

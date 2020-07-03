import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  topCover: {
    backgroundColor: '#FFFFFF',
    height: wp('9%'),
    width: wp('100%')
  },
  header: {
    width: wp('100%'),
    backgroundColor: '#FFFFFF',
    height: wp('16.267%'),
    flexDirection: 'row',
    alignItems: 'center'
  },
  backIcon: {
    height: wp('4.53%%'),
    width: wp('5.867%'),
    marginLeft: wp('5%')
  },
  relatedText: {
    marginLeft: wp('30%'),
    justifyContent: 'center',
    letterSpacing: -0.08,
    color: '#1F1F60',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: wp('5.3%')
  },
  tabContainer: {
    width: wp('100%'),
    minHeight: hp('90%')
  }
})

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
    marginLeft: wp('19%'),
    letterSpacing: -0.08,
    color: '#1F1F60',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: wp('5.3%')
  },
  scrollContainer: {
    marginTop: hp('6.8%')
  },
  previewContainer: {
    width: wp('80%'),
    height: wp('85.86%'),
    marginBottom: hp('7.1%')
  }
})

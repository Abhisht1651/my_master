import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  topCover: {
    backgroundColor: '#FFFFFF',
    height: 44,
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
  divider: {
    width: wp('100%'),
    borderBottomColor: '#E6ECED',
    borderBottomWidth: 1
  },
  relatedText: {
    marginLeft: wp('17%'),
    letterSpacing: -0.08,
    color: '#1F1F60',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: wp('5.3%')
  },
  scrollContainer: {
    width: wp('100%'),
    alignItems: 'center'
  },
  previewContainer: {
    width: wp('86%')
  }
})

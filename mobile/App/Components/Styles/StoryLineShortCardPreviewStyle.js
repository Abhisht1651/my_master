// @flow
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E6ECED',
    borderRadius: wp('4%'),
    opacity: 1
  },
  heading: {
    flexDirection: 'row',
    width: '84.84%',
    marginTop: wp('6.67%'),
    alignItems: 'center'
  },
  dot: {
    backgroundColor: '#1F1F60',
    height: wp('0.53%'),
    width: wp('0.53%'),
    borderRadius: wp('0.267%'),
    marginHorizontal: wp('1.3%')
  },
  headingIcon: {
    width: wp('4.53%'),
    height: wp('4.53%'),
    marginRight: 3
  },
  headingText: {
    textAlign: 'left',
    letterSpacing: -0.08,
    lineHeight: wp('4.267%'),
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%'),
    opacity: 1
  },
  newsTitleText: {
    textAlign: 'left',
    letterSpacing: -0.11,
    lineHeight: wp('7.2%'),
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('4.267%'),
    opacity: 1,
    marginTop: wp('2.67%'),
    width: '84.84%'
  },
  previewText: {
    textAlign: 'left',
    letterSpacing: -0.11,
    lineHeight: wp('7.2%'),
    color: '#47C3F4',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('4.267%'),
    opacity: 1,
    marginTop: wp('2.67%'),
    width: '84.84%'
  },
  caraouselContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: wp('3.467%'),
    marginBottom: wp('4.8%')
  },
  image: {
    width: '100%',
    height: wp('28.467%'),
    opacity: 1,
    borderTopLeftRadius: wp('3.2%'),
    borderTopRightRadius: wp('3.2%')
  },
  dateText: {
    width: '89.018%',
    textAlign: 'left',
    lineHeight: wp('7.2%'),
    letterSpacing: 0,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Light',
    fontSize: wp('3.73%'),
    marginTop: 15,
    opacity: 1
  },
  newsPreviewText: {
    width: '89.018%',
    textAlign: 'left',
    letterSpacing: -0.11,
    lineHeight: wp('6.4%'),
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('4.267%'),
    opacity: 1,
    marginBottom: wp('3.2%')
  },
  scrollContainer: {
    shadowOffset: {
      width: 0,
      height: 5
    },
    paddingLeft: '7.6%'
  },
  scrollViewContainer: {
    width: '100%'
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
  previewContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: wp('75.2%'),
    borderRadius: wp('4%'),
    opacity: 1
  },
  currentPreviewContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: wp('75.2%'),
    borderRadius: wp('4%'),
    opacity: 1,
    borderColor: '#47C3F4',
    borderStyle: 'solid',
    borderWidth: wp('0.8%')
  }
})

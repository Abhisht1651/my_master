// @flow
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    minHeight: 301,
    backgroundColor: '#E6ECED80',
    borderRadius: wp('4%'),
    opacity: 1
  },
  senderContainer: {
    width: '88%',
    opacity: 1
  },
  senderText: {
    textAlign: 'left',
    letterSpacing: -0.11,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('4.267%'),
    opacity: 1,
    marginVertical: wp('4.53%')
  },
  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCE9',
    opacity: 1
  },
  dot: {
    backgroundColor: '#1F1F60',
    height: wp('0.53%'),
    width: wp('0.53%'),
    borderRadius: wp('0.267%'),
    marginHorizontal: wp('1.3%')
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '88%',
    marginTop: wp('4%')
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
  iconStoryLineTrending: {
    width: wp('4.53%'),
    height: wp('4.53%')
  },
  iconStoryLineReach: {
    width: wp('3.467%'),
    height: wp('3.467%')
  },
  reachContainer: {
    width: '88%',
    marginTop: wp('1.3%'),
    flexDirection: 'row'
  },
  reachContainerText: {
    textAlign: 'left',
    letterSpacing: -0.07,
    lineHeight: wp('3.73%'),
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.2%'),
    opacity: 1
  },
  newsTitleText: {
    width: '88%',
    textAlign: 'left',
    letterSpacing: -0.11,
    lineHeight: wp('5.867%'),
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('4.267%'),
    opacity: 1,
    marginTop: wp('1.867%')
  },
  imageContainer: {
    marginTop: wp('1.067%'),
    alignSelf: 'center',
    width: '88%',
    height: wp('34.13%'),
    marginBottom: wp('4%')
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 1,
    borderRadius: wp('2%')
  }
})

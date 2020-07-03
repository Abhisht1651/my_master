// @flow
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E6ECED',
    borderRadius: wp('4%'),
    opacity: 1
  },
  containerWithoutBorder: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    opacity: 1
  },
  info: {
    flex: 145,
    width: '100%',
    paddingBottom: wp('4.53%'),
    alignItems: 'center'
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
    width: '87.3%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8.0745%'
  },
  headingTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconStoryLineTrending: {
    width: wp('4.53%'),
    height: wp('4.53%'),
    marginRight: 6
  },
  headingText: {
    textAlign: 'left',
    letterSpacing: -0.08,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%'),
    opacity: 1
  },
  followingButton: {
    width: wp('24.267%'),
    height: wp('8%'),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DCDCE9',
    borderRadius: wp('4.267%'),
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  followingButtonText: {
    textAlign: 'center',
    letterSpacing: -0.08,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: wp('3.73%'),
    opacity: 1
  },
  followButton: {
    width: wp('20%'),
    height: wp('8%')
  },
  friends: {
    flexDirection: 'row',
    width: '87.3%',
    marginTop: '0.8%'
  },
  friendsTextContainer: {
    flexDirection: 'row'
  },
  friendsIcon: {
    width: wp('3.467%'),
    height: wp('3.467%')
  },
  friendsText: {
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.2%'),
    opacity: 1,
    paddingRight: wp('5.3%')
  },
  newsContainer: {
    width: '87.3%',
    marginTop: '7.4534%'
  },
  newsTitleText: {
    textAlign: 'left',
    letterSpacing: -0.11,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('4.26%'),
    opacity: 1
  },
  updateTimeText: {
    marginTop: '1.5527%',
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.2%'),
    opacity: 1
  },
  imageContainer: {},
  image: {
    flex: 177,
    width: '100%',
    opacity: 1,
    borderBottomLeftRadius: wp('4%'),
    borderBottomRightRadius: wp('4%')
  },
  imageWithoutBorder: {
    flex: 177,
    width: '100%',
    opacity: 1
  }
})

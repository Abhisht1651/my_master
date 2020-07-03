// @flow
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    minHeight: 570,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E6ECED',
    borderRadius: wp('4%'),
    opacity: 1
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 1,
    width: '85.23%',
    marginTop: wp('6.67%')
  },
  dot: {
    backgroundColor: '#1F1F60',
    height: wp('0.53%'),
    width: wp('0.53%'),
    borderRadius: wp('0.267%'),
    marginHorizontal: wp('1.3%')
  },
  headingText: {
    textAlign: 'left',
    letterSpacing: -0.08,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%'),
    opacity: 1
  },
  storyLineIconHeading: {
    width: wp('4.53%'),
    height: wp('4.53%'),
    marginRight: wp('1.3%')
  },
  reachContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85.23%',
    marginTop: wp('2.93%')
  },
  reachIcon: {
    width: wp('3.467%'),
    height: wp('3.467%'),
    marginRight: 4,
    opacity: 1
  },
  reachText: {
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.2%'),
    opacity: 1
  },
  newsTitleText: {
    textAlign: 'left',
    letterSpacing: -0.11,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('4.267%'),
    opacity: 1,
    marginTop: wp('6.4%'),
    width: '85.23%'
  },
  updateTimeText: {
    width: '85.23%',
    marginTop: 5,
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.2%'),
    opacity: 1
  },
  previewContainer: {
    marginTop: wp('4.53%'),
    alignItems: 'center',
    width: '85.23%',
    borderRadius: wp('4%'),
    opacity: 1,
    borderColor: '#E6ECED',
    borderWidth: 0.5
  },
  image: {
    width: '100%',
    height: wp('42.2%'),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    opacity: 1
  },
  imageBorder: {
    borderTopLeftRadius: wp('4%'),
    borderTopRightRadius: wp('4%')
  },
  sourceImage: {
    width: '20%',
    height: '15%'
  },
  previewText: {
    textAlign: 'left',
    letterSpacing: -0.12,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('4.8%'),
    opacity: 1,
    marginTop: '8%',
    width: '86.28%'
  },
  relatedEntityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    width: '86.28%'
  },
  EntityRelatedText: {
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('3.2%'),
    opacity: 1
  },
  relatedEntityIconContainer: {
    flexDirection: 'row',
    marginLeft: '5%'
  },
  relatedEntityIcon: {
    height: wp('5%'),
    width: wp('5%'),
    borderRadius: wp('1.067%'),
    marginHorizontal: '3%'
  },
  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E6ECED',
    marginTop: '4%'
  },
  commentsContainer: {
    width: '86.28%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '6%',
    marginLeft: wp('1.3%')
  },
  commentsIcon: {
    width: wp('5.3%'),
    height: wp('5.3%'),
    opacity: 1,
    borderRadius: wp('3.73%'),
    marginLeft: -wp('1.3%')
  },
  commentsText: {
    textAlign: 'left',
    letterSpacing: 0,
    color: '#8F8FAF',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%'),
    marginLeft: '2%'
  },
  actionIconsContainer: {
    width: '82.857%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: wp('5.3%')
  },
  actionIcon: {
    opacity: 1,
    width: wp('17.3%'),
    height: wp('4.8%')
  }
})

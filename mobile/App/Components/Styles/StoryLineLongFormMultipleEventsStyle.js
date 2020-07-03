import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    width: wp('86.67%'),
    height: wp('165.3%'),
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: wp('0.267%'),
    borderStyle: 'solid',
    borderColor: '#E6ECED',
    borderRadius: wp('5.3%'),
    opacity: 1
  },
  headerContainer: {
    width: '87.69%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    opacity: 1,
    marginTop: 27
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
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
  activeText: {
    marginLeft: 8,
    textAlign: 'left',
    letterSpacing: -0.08,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%'),
    opacity: 1
  },
  storyLineIconHeading: {
    width: wp('4.53%'),
    height: wp('4.53%')
  },
  endedButton: {
    width: wp('14.4%'),
    height: wp('5.3%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8F8FAF',
    borderWidth: wp('0.267%'),
    borderStyle: 'solid',
    borderColor: '#E6ECED',
    borderRadius: wp('1.067%'),
    opacity: 1,
    marginLeft: 14
  },
  endedButtonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    letterSpacing: -0.07,
    color: '#FFFFFF',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.2%'),
    opacity: 1
  },
  friends: {
    flexDirection: 'row',
    width: '87.69%',
    marginTop: 5
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
    paddingRight: 20
  },
  newsTitleText: {
    width: '87.69%',
    textAlign: 'left',
    letterSpacing: -0.11,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('4.267%'),
    opacity: 1,
    marginTop: 24
  },
  updateTimeText: {
    width: '87.69%',
    marginTop: 5,
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.2%'),
    opacity: 1
  },
  caraouselContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: wp('3.467%'),
    marginBottom: wp('3.8%')
  },
  previewContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: wp('76.2%'),
    height: wp('95%'),
    borderRadius: wp('4%'),
    opacity: 1,
    borderWidth: wp('0.267%'),
    borderStyle: 'solid',
    borderColor: '#E6ECED'
  },
  previewContainerRead: {
    backgroundColor: '#F5F8F8',
    flexDirection: 'row',
    width: wp('76.2%'),
    height: wp('95%'),
    borderRadius: wp('4%'),
    opacity: 1,
    borderWidth: wp('0.267%'),
    borderStyle: 'solid',
    borderColor: '#E6ECED',
    alignItems: 'center',
    justifyContent: 'center'
  },
  readText: {
    textAlign: 'left',
    letterSpacing: -0.07,
    lineHeight: wp('5.867%'),
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('4.267%%'),
    opacity: 1
  },
  backIcon: {
    transform: [{ rotate: '180deg' }],
    height: wp('3.6%'),
    width: wp('4.8%'),
    marginLeft: 9
  },
  image: {
    width: '100%',
    height: wp('45.2%'),
    justifyContent: 'flex-end',
    opacity: 1
  },
  imageBorder: {
    borderTopLeftRadius: wp('4%'),
    borderTopRightRadius: wp('4%')
  },
  imageItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  playButton: {
    marginBottom: 5,
    marginLeft: 10,
    height: 47,
    width: 47,
    borderRadius: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#7B46E4',
    transform: [{ rotate: '90deg' }]
  },
  sourceImage: {
    width: 80,
    height: 30
  },
  previewText: {
    textAlign: 'left',
    letterSpacing: -0.12,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('4.8%'),
    opacity: 1,
    marginTop: '8%',
    width: '85%'
  },
  relatedEntityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    marginBottom: '5%',
    width: '85%'
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
    marginLeft: '5%',
    alignItems: 'center'
  },
  relatedEntityIcon: {
    height: wp('5.067%'),
    width: wp('5.067%'),
    borderRadius: wp('1.067%'),
    marginHorizontal: '2%'
  },
  divider: {
    width: '100%',
    borderBottomColor: '#E6ECED',
    borderBottomWidth: 1
  },
  commentsContainer: {
    width: '85%',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: wp('4.3%')
  },
  commentsIcon: {
    width: wp('5.3%'),
    height: wp('5.3%'),
    opacity: 1,
    borderRadius: wp('3.73%'),
    marginLeft: -5
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
  date: {
    marginBottom: 15,
    textAlign: 'center',
    letterSpacing: 0,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.25'),
    opacity: 1
  },
  actionIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '8%',
    marginBottom: '7%'
  },
  actionIcon: {
    opacity: 1,
    width: wp('17.3%'),
    height: wp('4.8%')
  }
})

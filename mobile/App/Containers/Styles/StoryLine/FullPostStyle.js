import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../../../Themes/ScreenMetrics'

export default StyleSheet.create({
  superContainer: {
    flex: 1
  },
  container: {
    flex: 812 - 90,
    backgroundColor: '#FFFFFF',
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  containerBottom: {
    flex: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topCover: {
    backgroundColor: '#FFFFFF',
    height: wp('9%'),
    width: wp('100%')
  },
  mainDataContainer: {
    width: wp('100%'),
    alignItems: 'center'
  },
  header: {
    height: 61,
    width: wp('86.67%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  backIcon: {
    height: 13.5
  },
  actionBubbles: {
    height: 38
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6ECED',
    width: wp('100%')
  },
  storyImageContainer: {
    width: wp('100%')
  },
  storyImage: {
    width: '100%',
    height: wp('58%')
  },
  storyContainer: {
    marginTop: hp('4.3%'),
    width: wp('86.67%')
  },
  storyTitle: {
    width: wp('60%')
  },
  storyTitleTextLight: {
    textAlign: 'left',
    lineHeight: 27,
    letterSpacing: 0,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: 16,
    opacity: 1,
    marginBottom: 5
  },
  storyTitleText: {
    textAlign: 'left',
    lineHeight: 29,
    letterSpacing: 0,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: 22,
    opacity: 1
  },
  dateText: {
    textAlign: 'left',
    lineHeight: 16,
    letterSpacing: -0.08,
    color: '#22226B',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: 14,
    opacity: 1,
    marginTop: 3
  },
  updateTimeText: {
    marginTop: 5,
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: 12,
    opacity: 1
  },
  storyDescription: {
    marginTop: hp('1%'),
    width: wp('80%'),
    marginBottom: hp('6%')
  },
  storyDescriptionText: {
    textAlign: 'left',
    lineHeight: 22,
    letterSpacing: 0,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Light',
    fontSize: 14,
    opacity: 1
  },
  sourceContainer: {
    width: wp('86.67%'),
    paddingBottom: wp('10%')
  },
  titleContainer: {
    flexDirection: 'row',
    width: wp('86.6%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('5%'),
    marginBottom: hp('2%')
  },
  titleText: {
    textAlign: 'left',
    letterSpacing: -0.12,
    color: '#262676',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: 18,
    opacity: 1
  },
  viewAllText: {
    textAlign: 'right',
    letterSpacing: -0.09,
    color: '#7B46E4',
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: 16,
    opacity: 1
  },
  sourceItem: {
    marginVertical: wp('2%')
  },
  commentsContainer: {
    width: wp('100%'),
    backgroundColor: '#F5F8F8',
    alignItems: 'center'
  },
  commentsHeaderContainer: {
    width: wp('86.67%'),
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100
  },
  commentButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mostPopularText: {
    textAlign: 'left',
    letterSpacing: -0.08,
    color: '#1F1F60',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%'),
    marginRight: 5
  },
  commentButtonText: {
    textAlign: 'left',
    letterSpacing: -0.08,
    color: '#8F8FAF',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%')
  },
  commentIcon: {
    marginRight: 10
  },
  allCommentsContainer: {
    marginTop: 28,
    backgroundColor: '#F7F7F7'
  },
  comments: {
    width: wp('86.24%'),
    marginBottom: 40,
    flexDirection: 'row'
  },
  commentBoxContainer: {
    width: wp('78.1%'),
    alignItems: 'center'
  },
  commentIconContainer: {
    marginTop: 15,
    marginRight: 5
  },
  commentsIcon: {
    width: 28,
    height: 28,
    borderRadius: 14
  },
  replyContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20
  },
  replyBoxContainer: {
    width: wp('68.8%'),
    marginLeft: 5
  },
  viewRepliesContainer: {
    flexDirection: 'row',
    marginTop: 13,
    alignItems: 'center'
  },
  viewRepliesText: {
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#1F1C62',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: wp('3.467%'),
    marginRight: 6
  },
  commentBar: {
    height: wp('24%'),
    width: wp('100%'),
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  chevron: {
    height: wp('2%'),
    width: wp('3%')
  },
  suggestionsContainerEntities: {
    width: wp('100%'),
    alignItems: 'center'
  },
  titleContainerEntities: {
    flexDirection: 'row',
    width: wp('86.6%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 41
  },
  previewContainerEntities: {
    marginTop: wp('4.5%'),
    height: wp('20%'),
    marginBottom: wp('10.4%')
  },
  slider: {},
  sliderContentContainer: { marginLeft: -140 }
})

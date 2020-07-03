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
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    justifyContent: 'flex-end'
  },
  containerBottom: {
    flex: 90
  },
  topCover: {
    backgroundColor: '#FFFFFF',
    height: 44,
    width: wp('100%')
  },
  mainDataContainer: {
    width: wp('100%'),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  header: {
    height: wp('16.267%'),
    width: wp('86.67%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  backIcon: {
    height: wp('4.53%%'),
    width: wp('5.867%')
  },
  actionBubbles: {
    width: wp('35.73%'),
    height: wp('10.133%')
  },
  divider: {
    borderBottomWidth: wp('0.267%'),
    borderBottomColor: '#E6ECED',
    opacity: 1,
    width: wp('100%')
  },
  pollContainer: {
    width: wp('85.867%'),
    marginTop: wp('5.93%')
  },
  pollHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  createdText: {
    textAlign: 'right',
    letterSpacing: -0.08,
    color: '#1F1F60',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%')
  },
  dot: {
    backgroundColor: '#1F1F60',
    height: wp('0.53%'),
    width: wp('0.53%'),
    borderRadius: wp('0.267%'),
    marginHorizontal: wp('1.3%')
  },
  timeIconContainer: {
    opacity: 1
  },
  pollIcon: {
    height: wp('4.53%'),
    width: wp('4.53%')
  },
  timeTextContainer: {
    marginLeft: 6
  },
  timeText: {
    textAlign: 'right',
    letterSpacing: -0.07,
    color: '#002468',
    opacity: 0.5,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.2%')
  },
  questionContainer: {
    marginTop: wp('3.73%')
  },
  readStoryLinesContainer: {
    marginTop: wp('3.73%'),
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuIcon: {
    width: wp('3.73%'),
    height: wp('3.2%'),
    marginRight: 5
  },
  readStoryLinesText: {
    textAlign: 'left',
    letterSpacing: -0.11,
    lineHeight: wp('7.2%'),
    color: '#1F1F60',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Light',
    fontSize: wp('4.267%')
  },
  questionText: {
    textAlign: 'left',
    letterSpacing: -0.11,
    lineHeight: wp('5.867%'),
    color: '#1F1F60',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('4.8%')
  },
  voterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp('3.467%')
  },
  voterIconContainer: {
    flexDirection: 'row',
    marginLeft: 8
  },
  voterIcon: {
    width: wp('7.467%'),
    height: wp('7.467%'),
    opacity: 1,
    borderRadius: wp('3.73%'),
    marginLeft: -wp('2.1%')
  },
  votesContainer: {
    marginLeft: wp('2.1%')
  },
  votes: {
    textAlign: 'left',
    letterSpacing: -0.1,
    color: '#082366',
    opacity: 0.5,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%')
  },
  optionsContainer: {
    marginTop: wp('4%')
  },
  optionContainer: {
    flexDirection: 'row',
    height: wp('15.467%%'),
    alignItems: 'center'
  },
  option: {
    height: wp('6.67%'),
    width: wp('6.67%'),
    borderRadius: wp('3.2%'),
    borderColor: '#8F8FAF',
    borderStyle: 'solid',
    borderWidth: 1,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionFill: {
    height: wp('4.2%'),
    width: wp('4.2%'),
    borderRadius: wp('2.1%'),
    backgroundColor: '#00ff46',
    opacity: 1
  },
  optionTextContainer: {
    paddingLeft: 10
  },
  optionText: {
    textAlign: 'left',
    marginTop: 2,
    letterSpacing: 0,
    color: '#1F1F60',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Light',
    fontSize: wp('3.7%')
  },
  optionDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6ECED'
  },
  buttonContainer: {
    marginTop: wp('9.3%'),
    marginBottom: wp('9.067%')
  },
  buttonText: {
    textAlign: 'center',
    letterSpacing: -0.09,
    color: '#7B46E4',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: wp('4.2%')
  },
  commentInputContainer: {
    width: wp('100%'),
    backgroundColor: 'black'
  },
  relatedContainer: {
    marginTop: wp('10.4%'),
    minHeight: hp('20%'),
    width: wp('100%'),
    alignItems: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    width: wp('86.6%'),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleText: {
    textAlign: 'left',
    letterSpacing: -0.12,
    lineHeight: wp('7.2%'),
    color: '#262676',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('4.8%'),
    opacity: 1
  },
  viewAllText: {
    textAlign: 'right',
    letterSpacing: -0.09,
    color: '#7B46E4',
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: wp('4.267%'),
    opacity: 1
  },
  scrollContainer: {
    shadowOffset: {
      width: 0,
      height: 5
    },
    paddingHorizontal: wp('6.4%')
  },
  scrollViewContainer: {
    width: wp('100%')
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
  previewContainer: {
    width: wp('80%'),
    marginTop: wp('4.5%'),
    height: wp('80%'),
    marginRight: wp('4%'),
    borderRadius: wp('4%'),
    opacity: 1,
    borderColor: '#E6ECED',
    borderWidth: wp('0.13%'),
    marginBottom: wp('18.4%')
  },
  previewContainerEntities: {
    marginTop: wp('4.5%'),
    height: wp('20%'),
    marginBottom: wp('18.4%')
  },
  slider: {},
  sliderContentContainer: { marginLeft: -140 },
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
  commentButtonText: {
    textAlign: 'left',
    letterSpacing: -0.08,
    color: '#8F8FAF',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%')
  },
  commentIcon: {
    height: wp('3.4%'),
    width: wp('4%'),
    marginRight: 10
  },
  commentType: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  commentTypeText: {
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#1F1C62',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%'),
    paddingRight: 5
  },
  allCommentsContainer: {
    marginTop: 28
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
    paddingRight: 5
  }
})

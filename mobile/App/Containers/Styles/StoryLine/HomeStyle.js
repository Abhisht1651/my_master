import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  topCover: {
    backgroundColor: '#FFFFFF',
    height: wp('9%'),
    width: wp('100%')
  },
  dot: {
    backgroundColor: '#1F1F60',
    height: wp('0.53%'),
    width: wp('0.53%'),
    borderRadius: wp('0.267%'),
    marginHorizontal: wp('1.3%')
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
  storyContainer: {
    marginTop: hp('5.78%'),
    width: wp('86.67%')
  },
  storyHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  storyHeading: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headingText: {
    textAlign: 'left',
    letterSpacing: -0.08,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: 14,
    opacity: 1
  },
  friendsText: {
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.2%'),
    opacity: 1,
    paddingLeft: 5,
    paddingRight: 10
  },
  storyTitle: {
    marginTop: hp('6.1%'),
    width: wp('60%')
  },
  storyTitleText: {
    textAlign: 'left',
    lineHeight: wp('7.7%'),
    letterSpacing: 0,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('5.867%'),
    opacity: 1
  },
  updateTimeText: {
    marginTop: 5,
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.2%'),
    opacity: 1
  },
  storyDescription: {
    marginTop: hp('2.8%'),
    width: wp('80%'),
    marginBottom: hp('6%')
  },
  storyDescriptionText: {
    textAlign: 'left',
    lineHeight: wp('5.867%'),
    letterSpacing: 0,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Light',
    fontSize: wp('3.73%'),
    opacity: 1
  },
  timeLineContainer: {
    width: wp('100%'),
    backgroundColor: '#F5F8F8',
    paddingLeft: wp('2.93%'),
    paddingTop: wp('9.6%'),
    justifyContent: 'center'
  },
  noDisplay: {
    display: 'none'
  },
  itemContainer: {
    width: wp('80%'),
    marginBottom: wp('15%')
  },
  timeTextContainer: {
    marginTop: -13,
    marginBottom: 15
  },
  timeText: {
    textAlign: 'left',
    lineHeight: wp('4.26%'),
    letterSpacing: -0.08,
    color: '#22226B',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%'),
    opacity: 1
  },
  eventContainer: {
    width: wp('80%')
  },
  timeLineHeader: {
    marginTop: wp('11.467%'),
    width: wp('86.67%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 100
  },
  timeLineText: {
    textAlign: 'left',
    letterSpacing: -0.12,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: wp('5.3%'),
    opacity: 1
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('23.467%'),
    marginRight: 20
  },
  sortByText: {
    textAlign: 'left',
    letterSpacing: -0.12,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%'),
    opacity: 1
  },
  sortText: {
    textAlign: 'left',
    letterSpacing: -0.12,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: wp('3.73%'),
    opacity: 1,
    paddingRight: 5
  },
  eventHeader: {
    flexDirection: 'row',
    marginTop: wp('10.4%'),
    width: wp('86.67%'),
    marginBottom: wp('5.6%')
  },
  eventHeaderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6
  },
  eventActiveText: {
    textAlign: 'left',
    letterSpacing: -0.12,
    color: '#262676',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%'),
    opacity: 1
  },
  eventLightText: {
    textAlign: 'left',
    letterSpacing: -0.12,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%'),
    opacity: 1
  },
  eventIcon: {
    width: wp('4%'),
    height: wp('5.06%'),
    marginRight: 5
  },
  suggestionsContainer: {
    marginTop: hp('4%'),
    minHeight: hp('20%'),
    width: wp('100%'),
    alignItems: 'center'
  },
  suggestionsContainerEntities: {
    width: wp('100%'),
    alignItems: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    width: wp('86.6%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('5%')
  },
  titleContainerEntities: {
    flexDirection: 'row',
    width: wp('86.6%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 41
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
    marginTop: 17,
    height: wp('80%'),
    marginRight: 15,
    borderRadius: 15,
    opacity: 1,
    borderColor: '#E6ECED',
    borderWidth: 0.5,
    marginBottom: hp('6%')
  },
  previewContainerEntities: {
    marginTop: wp('4.5%'),
    height: wp('20%'),
    marginBottom: wp('18.4%')
  },
  slider: {},
  sliderContentContainer: { marginLeft: -140 },
  previewContainerGallery: {
    width: wp('80%'),
    marginTop: 17,
    height: wp('40%'),
    marginRight: 15,
    marginBottom: hp('10%')
  },
  galleryImageContainer: {
    width: wp('80%'),
    height: wp('40%'),
    borderRadius: wp('4%'),
    overflow: 'hidden'
  },
  galleryImage: {
    width: wp('80%'),
    height: wp('40%'),
    overflow: 'hidden'
  },
  player: {
    borderRadius: 25,
    width: 50,
    height: 50,
    position: 'absolute',
    top: wp('26'),
    left: 10,
    alignItems: 'stretch',
    bottom: 0,
    right: 0
  },
  galleryText: {
    textAlign: 'left',
    letterSpacing: -0.12,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('4.253%'),
    opacity: 1,
    marginTop: 17
  }
})

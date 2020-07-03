import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  superContainer: {
    flex: 768 - 75,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#FFFFFF',
    width: wp('100%'),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E6ECED',
    paddingVertical: 2
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6ECED',
    width: wp('100%')
  },
  headerText: {
    textAlign: 'center',
    letterSpacing: -0.14,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: 20,
    marginTop: hp('5%')
  },
  searchContainer: {
    width: wp('86.6%'),
    height: 35,
    marginVertical: hp('2%')
  },
  trendingEventsContainer: {
    backgroundColor: '#FFFFFF',
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
  trendingEventsDisplay: {
    width: wp('86.6%')
  },
  trendingEventsDisplayItems: {
    marginTop: hp('3%'),
    borderBottomWidth: 1,
    borderBottomColor: '#E6ECED',
    paddingBottom: 20
  },
  trendingEventsDisplayItemsLast: {
    marginTop: hp('3%'),
    borderBottomWidth: 1,
    borderBottomColor: '#E6ECED',
    paddingBottom: 50
  },
  suggestionsContainer: {
    minHeight: hp('20%'),
    width: wp('100%'),
    alignItems: 'center'
  },
  suggestionsContainerEntities: {
    width: wp('100%'),
    alignItems: 'center'
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
    marginBottom: hp('5%')
  },
  previewContainerEntities: {
    width: wp('28%'),
    height: wp('44%'),
    marginRight: 8,
    marginBottom: wp('10%'),
    marginTop: 17
  },
  slider: {},
  sliderContentContainer: { marginLeft: -wp('28%') },
  footer: {
    flex: 75
  }
})

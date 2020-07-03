import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../../../Themes/ScreenMetrics'

export default StyleSheet.create({
  headingText: {
    textAlign: 'left',
    letterSpacing: -0.11,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('4.267%'),
    color: '#1F1F60',
    opacity: 1
  },
  latestSearchText: {
    textAlign: 'left',
    letterSpacing: 0,
    fontFamily: 'BananaGrotesk-Light',
    fontSize: wp('3.73%'),
    color: '#8F8FAF',
    opacity: 1
  },
  display: {
    marginTop: hp('0.5%')
  },
  displayItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: hp('10.2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#E6ECED'
  },
  closeIcon: {
    opacity: 1,
    height: wp('2.9%'),
    width: wp('2.9%')
  },
  searchSuggestionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: hp('10.2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#E6ECED'
  },
  searchSuggestionImageContainer: {
    width: wp('9.067%'),
    height: wp('9.067%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  searchSuggestionImage: {
    width: wp('9.067%'),
    height: wp('9.067%'),
    borderRadius: wp('2%')
  },
  searchSuggestionImagePoll: {
    width: wp('6.067%'),
    height: wp('6.067%')
  },
  searchSuggestionImageUser: {
    width: wp('9.067%'),
    height: wp('9.067%'),
    borderRadius: wp('5%')
  },
  searchSuggestionTextContainer: {},
  searchSuggestionQueryContainer: {
    flexDirection: 'row'
  },
  searchSuggestionCategoryText: {
    textAlign: 'left',
    letterSpacing: 0,
    fontFamily: 'BananaGrotesk-Light',
    fontSize: wp('2.93%'),
    color: '#8F8FAF',
    opacity: 1,
    marginBottom: 3
  },
  searchSuggestionQueryMatchedText: {
    textAlign: 'left',
    letterSpacing: 0,
    fontFamily: 'BananaGrotesk-Light',
    fontSize: wp('3.73%'),
    color: '#1F1F60',
    opacity: 1
  },
  searchSuggestionQueryUnmatchedText: {
    textAlign: 'left',
    letterSpacing: 0,
    fontFamily: 'BananaGrotesk-Light',
    fontSize: wp('3.73%'),
    color: '#8F8FAF',
    opacity: 1
  }
})

import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    opacity: 1
  },
  searchBoxContainer: {
    flexDirection: 'row',
    marginTop: hp('7.6%'),
    width: wp('86.4%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchContainer: {
    width: wp('66.934%'),
    height: 35,
    borderRadius: 18,
    backgroundColor: '#F5F8F8'
  },
  cancelButtonContainer: {
    width: wp('14.6%'),
    height: wp('4.8%')
  },
  cancelButtonText: {
    textAlign: 'center',
    letterSpacing: -0.09,
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: 16,
    color: '#7B46E4',
    opacity: 1
  },
  displayContainer: {
    marginTop: hp('3.571%'),
    width: wp('86.67%'),
    alignSelf: 'center',
    paddingHorizontal: wp('1%')
  },
  headingText: {
    textAlign: 'left',
    letterSpacing: -0.11,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: 16,
    color: '#1F1F60',
    opacity: 1
  },
  latestSearchText: {
    textAlign: 'left',
    letterSpacing: 0,
    fontFamily: 'BananaGrotesk-Light',
    fontSize: 14,
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
    height: 11,
    width: 11
  }
})

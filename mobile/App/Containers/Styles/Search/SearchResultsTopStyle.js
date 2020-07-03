import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topResultsContainer: {
    width: wp('100%'),
    backgroundColor: '#FFFFFF',
    height: 200,
    alignItems: 'center'
  },
  topResultstitleContainer: {
    width: wp('86.67%')
  },
  topResultstitleText: {
    textAlign: 'left',
    letterSpacing: -0.12,
    lineHeight: wp('7.2%'),
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('4.8%'),
    opacity: 1,
    marginTop: 25,
    marginBottom: 19
  },
  topResultDisplay: {
    marginBottom: 10
  },
  suggestionsContainer: {
    minHeight: hp('20%'),
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
  titleContainer: {
    flexDirection: 'row',
    width: wp('86.6%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('5%')
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
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6ECED',
    width: wp('100%')
  }
})

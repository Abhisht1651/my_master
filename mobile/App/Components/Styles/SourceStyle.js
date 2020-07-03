// @flow
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('4%'),
    borderWidth: 1,
    borderColor: '#E6ECED',
    borderStyle: 'solid'
  },
  header: {
    marginTop: wp('4%'),
    marginBottom: wp('2%'),
    width: '84.876%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sourceText: {
    textAlign: 'left',
    letterSpacing: -0.08,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: wp('5%'),
    opacity: 1
  },
  iconsSource: {
    height: wp('4%'),
    width: wp('3.73%')
  },
  flexContainer: {
    flexDirection: 'row',
    width: '84.876%',
    marginBottom: wp('6%')
  },
  imageContainer: {
    paddingRight: wp('2.13%'),
    width: wp('26.67%'),
    height: wp('15.2%')
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 1,
    borderRadius: wp('2.67%')
  },
  detailsContainer: {
    width: '95%',
    justifyContent: 'space-between'
  },
  iconStoryLineTrending: {
    width: wp('4.53%'),
    height: wp('4.53%')
  },
  descriptionContainer: {
    paddingTop: wp('0.5%'),
    width: '70%'
  },
  descriptionText: {
    textAlign: 'left',
    letterSpacing: -0.11,
    lineHeight: wp('4.8%'),
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%'),
    opacity: 1
  },
  timeContainer: {
    flexDirection: 'row'
  },
  timeText: {
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.2%')
  }
})

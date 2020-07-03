// @flow
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    width: '90%'
  },
  flexContainer: {
    flexDirection: 'row',
    width: '90%'
  },
  storyTitleText: {
    textAlign: 'left',
    letterSpacing: -0.11,
    lineHeight: wp('5.867%'),
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('4.267%'),
    paddingTop: wp('1.5%'),
    paddingBottom: 10,
    opacity: 1
  },
  imageContainer: {
    paddingRight: wp('2.13%'),
    width: wp('29.33%'),
    height: wp('18.13%')
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 1,
    borderRadius: wp('2.67%')
  },
  detailsContainer: {
    width: '100%',
    justifyContent: 'space-between'
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headingText: {
    textAlign: 'left',
    letterSpacing: -0.08,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%'),
    opacity: 1
  },
  dot: {
    backgroundColor: '#1F1F60',
    height: wp('0.53%'),
    width: wp('0.53%'),
    borderRadius: wp('0.267%'),
    marginHorizontal: wp('1.3%')
  },
  iconStoryLineTrending: {
    width: wp('4.53%'),
    height: wp('4.53%')
  },
  dateText: {
    textAlign: 'left',
    letterSpacing: 0,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Light',
    fontSize: wp('3.73%'),
    opacity: 1,
    marginTop: wp('1%')
  },
  descriptionContainer: {
    paddingTop: wp('0.5%'),
    width: '70%'
  },
  descriptionText: {
    textAlign: 'left',
    letterSpacing: -0.11,
    lineHeight: wp('5.867%'),
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('4.267%'),
    opacity: 1
  },
  sourceTextContainer: {
    flexDirection: 'row'
  },
  sourceByText: {
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.2%')
  },
  sourceText: {
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Bold',
    paddingHorizontal: 5,
    fontSize: wp('3.2%')
  }
})
